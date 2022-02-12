import { Component, Input, OnDestroy, OnInit } from "@angular/core"
import { QrCodeErrorCorrectionLevel, RGBAColor } from "./types"

@Component({
  selector: "qr-code",
  template: `
    <canvas *ngIf="value"
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
  fillTheParentElement?: boolean

  @Input()
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel

  @Input()
  centerImageSrc?: string

  @Input()
  centerImageSize?: string | number

  @Input()
  margin?: number
}
