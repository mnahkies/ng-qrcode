import { Directive, Input, isDevMode, OnChanges, ViewContainerRef } from "@angular/core"
import qrcode from "qrcode"
import { QrCodeErrorCorrectionLevel, QRCodeMaskPattern, RGBAColor } from "./types"

const validColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/

const validNumberRegex = /^[0-9.]+$/

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `canvas[qrCode]`,
  standalone: true,
})
export class QrCodeDirective implements OnChanges {

  static readonly DEFAULT_ERROR_CORRECTION_LEVEL: QrCodeErrorCorrectionLevel = "M"
  static readonly DEFAULT_CENTER_IMAGE_SIZE = 40

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("qrCode") value!: string

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("qrCodeVersion") version?: number

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("qrCodeErrorCorrectionLevel") errorCorrectionLevel?: QrCodeErrorCorrectionLevel = QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL

  @Input() width?: number | string
  @Input() height?: number | string
  @Input() darkColor?: RGBAColor = "#000000FF"
  @Input() lightColor?: RGBAColor = "#FFFFFFFF"

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("qrCodeCenterImageSrc") centerImageSrc?: string
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("qrCodeCenterImageWidth") centerImageWidth?: number | string
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("qrCodeCenterImageHeight") centerImageHeight?: number | string

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("qrCodeMargin") margin?: number = 16

  @Input()
  qrScale?: number | undefined

  @Input()
  qrCodeMaskPattern?: QRCodeMaskPattern | undefined

  private centerImage?: HTMLImageElement

  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  async ngOnChanges() {
    if (!this.value) {
      return
    }

    if (this.version && this.version > 40) {
      console.warn("[qrCode] max version is 40, clamping")
      this.version = 40
    } else if (this.version && this.version < 1) {
      console.warn("[qrCode] min version is 1, clamping")
      this.version = 1
    } else if (this.version !== undefined && isNaN(this.version)) {
      console.warn("[qrCode] version should be set to a number, defaulting to auto")
      this.version = undefined
    }

    const canvas = this.viewContainerRef.element.nativeElement as HTMLCanvasElement | null

    if (!canvas) {
      // native element not available on server side rendering
      return
    }

    const context = canvas.getContext("2d")

    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    }

    const errorCorrectionLevel = this.errorCorrectionLevel ?? QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL

    const dark = this.darkColor && validColorRegex.test(this.darkColor) ? this.darkColor : undefined
    const light = this.lightColor && validColorRegex.test(this.lightColor) ? this.lightColor : undefined

    if (isDevMode()) {
      if (!dark && this.darkColor) {
        console.error("[ng-qrcode] darkColor set to invalid value, must be RGBA hex color string, eg: #3050A1FF")
      }

      if (!light && this.lightColor) {
        console.error("[ng-qrcode] lightColor set to invalid value, must be RGBA hex color string, eg: #3050A130")
      }
    }

    await qrcode
      .toCanvas(canvas, this.value, {
        version: this.version,
        errorCorrectionLevel,
        width: getOptionalInt(this.width),
        margin: this.margin,
        scale: this.qrScale,
        maskPattern: this.qrCodeMaskPattern,
        color: {
          dark,
          light,
        },
      })

    const centerImageSrc = this.centerImageSrc
    const centerImageWidth = getIntOrDefault(this.centerImageWidth, QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE)
    const centerImageHeight = getIntOrDefault(this.centerImageHeight, QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE)

    if (centerImageSrc && context) {

      if (!this.centerImage) {
        this.centerImage = new Image(centerImageWidth, centerImageHeight)
      }

      const centerImage = this.centerImage

      if (centerImageSrc !== this.centerImage.src) {
        centerImage.src = centerImageSrc
      }

      if (centerImageWidth !== this.centerImage.width) {
        centerImage.width = centerImageWidth
      }

      if (centerImageHeight !== this.centerImage.height) {
        centerImage.height = centerImageHeight
      }

      const doDrawImage = () => {
        context.drawImage(
          centerImage,
          canvas.width / 2 - centerImageWidth / 2,
          canvas.height / 2 - centerImageHeight / 2, centerImageWidth, centerImageHeight,
        )
      }

      centerImage.onload = doDrawImage

      if (centerImage.complete) {
        doDrawImage()
      }

    }

  }

}

export function getOptionalInt(value: string | number): number;
export function getOptionalInt(value: string | number | undefined): number | undefined;
export function getOptionalInt(value: string | number | undefined): number | undefined {
  if (value === undefined || value === "") {
    return undefined
  }

  if (typeof value === "string") {

    if (!validNumberRegex.test(value)) {
      throw new Error(`'${ value }' is not a valid number`)
    }

    return parseFloat(value)
  }

  return value
}

export function getIntOrDefault(value: string | number | undefined, defaultValue: number): number {
  if (value === undefined || value === "") {
    return defaultValue
  }

  return getOptionalInt(value)
}
