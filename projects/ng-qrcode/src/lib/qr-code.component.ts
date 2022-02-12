import { Component, Input, OnDestroy, OnInit } from "@angular/core"
import { QrCodeErrorCorrectionLevel, RGBAColor } from "./types"

@Component({
  selector: "qr-code",
  template: `
    <canvas *ngIf="value && !refreshing"
            [qrCode]="value"
            [qrCodeErrorCorrectionLevel]="errorCorrectionLevel"
            [qrCodeCenterImageSrc]="centerImageSrc"
            [qrCodeCenterImageWidth]="centerImageSize"
            [qrCodeCenterImageHeight]="centerImageSize"
            [qrCodeMargin]="margin"
            [width]="size"
            [height]="size"
            [darkColor]="darkColor"
            [lightColor]="lightColor"
            [fillTheParentElement]="fillTheParentElement"
    >
    </canvas>
  `,
  styles: [],
})
export class QrCodeComponent implements OnInit, OnDestroy {

  @Input()
  value?: string

  @Input()
  size?: string | number

  @Input()
  darkColor?: RGBAColor

  @Input()
  lightColor?: RGBAColor

  @Input()
  fillTheParentElement?: boolean

  @Input()
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel

  @Input()
  centerImageSrc?: string

  @Input()
  centerImageSize?: string | number

  @Input()
  margin?: number

  refreshing = false

  resizeEventListener: EventListener = () => {
    this.refreshing = true
    setTimeout(() => {
      this.refreshing = false
    }, 100)
  }

  ngOnInit(): void {
    window.addEventListener("resize", this.resizeEventListener)
  }

  ngOnDestroy(): void {
    window.removeEventListener("resize", this.resizeEventListener)
  }
}
