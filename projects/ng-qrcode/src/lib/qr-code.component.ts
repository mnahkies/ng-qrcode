import { Component, Input } from "@angular/core"
import { QrCodeErrorCorrectionLevel } from "./types"

@Component({
  selector: "qr-code",
  template: `
    <canvas *ngIf="value"
            [qrCode]="value"
            [qrCodeErrorCorrectionLevel]="errorCorrectionLevel"
            [qrCodeCenterImageSrc]="centerImageSrc"
            [qrCodeCenterImageWidth]="centerImageSize"
            [qrCodeCenterImageHeight]="centerImageSize"
            [width]="size"
            [height]="size">
    </canvas>
  `,
  styles: [],
})
export class QrCodeComponent {

  @Input()
  value?: string

  @Input()
  size?: string | number

  @Input()
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel

  @Input()
  centerImageSrc?: string

  @Input()
  centerImageSize?: string | number

}
