import { Component, Input } from "@angular/core"
import { QrCodeErrorCorrectionLevel } from "./types"

@Component({
  selector: "qr-code",
  template: `
    <canvas *ngIf="value"
            [qrCode]="value"
            [qrCodeErrorCorrectionLevel]="errorCorrectionLevel"
            [width]="size" [height]="size">
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
}
