import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { QrCodeDirective } from "./qr-code.directive"
import { QrCodeErrorCorrectionLevel, RGBAColor } from "./types"

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
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
        [qrScale]="scale"
        [qrCodeMaskPattern]="maskPattern"
        [width]="size"
        [height]="size"
        [class]="styleClass"
        [ngStyle]="style"
        [darkColor]="darkColor"
        [lightColor]="lightColor"
      >
      </canvas>
    }
  `,
  styles: [],
  standalone: true,
  imports: [QrCodeDirective, CommonModule]
})
export class QrCodeComponent {

  @Input()
  value?: string

  @Input()
  size?: string | number

  @Input()
  style?: {
    // matches type of ngStyle https://angular.io/api/common/NgStyle
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [klass: string]: any
  } | null

  @Input()
  styleClass?: string

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

  @Input()
  scale?: number

  @Input()
  maskPattern?: number
}
