import { Directive, Input, OnChanges, ViewContainerRef } from "@angular/core"
import qrcode from "qrcode"

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: `canvas[qrCode]`,
})
export class QrCodeDirective implements OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input("qrCode") value!: string

  // tslint:disable-next-line:no-input-rename
  @Input("qrCodeVersion") version?: number

  // TODO refactor to QRCodeErrorCorrectionLevel after https://github.com/DefinitelyTyped/DefinitelyTyped/pull/35367
  // tslint:disable-next-line:no-input-rename
  @Input("qrCodeErrorCorrectionLevel") errorCorrectionLevel = "M"

  @Input() width?: number
  @Input() height?: number

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnChanges() {

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

    let canvas = this.viewContainerRef.element.nativeElement as HTMLCanvasElement | null

    if (!canvas) {
      // native element not available on server side rendering
      return
    }

    let context = canvas.getContext("2d")

    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    }

    // TODO remove cast after https://github.com/DefinitelyTyped/DefinitelyTyped/pull/35367
    qrcode
      .toCanvas(canvas, this.value, {
        version: this.version,
        errorCorrectionLevel: this.errorCorrectionLevel,
        width: this.width,
      } as any)
  }

}
