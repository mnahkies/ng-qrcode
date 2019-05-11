import { Component, Input } from "@angular/core"

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

  // TODO refactor to QRCodeErrorCorrectionLevel after https://github.com/DefinitelyTyped/DefinitelyTyped/pull/35367
  @Input()
  errorCorrectionLevel?: string
}
