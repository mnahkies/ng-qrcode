import { Component, Input } from "@angular/core"
import { QrCodeErrorCorrectionLevel, RGBAColor } from "./types"

@Component({
  selector: "qr-code",
  template: `
    @if (value) {
      <canvas
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
      >
      </canvas>
    }
  `,
  styles: [],
})
export class QrCodeComponent {

  @Input()
  value?: string

  @Input()
  size?: string | number

  @Input()
  darkColor?: RGBAColor

  @Input()
  lightColor?: RGBAColor

  @Input()
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel

  @Input()
  centerImageSrc?: string

  @Input()
  centerImageSize?: string | number

  @Input()
  margin?: number

}
