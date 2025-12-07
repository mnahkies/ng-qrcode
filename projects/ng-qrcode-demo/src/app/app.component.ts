import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { QrCodeComponent, QrCodeErrorCorrectionLevel, QRCodeMaskPattern, RGBAColor } from "ng-qrcode"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    QrCodeComponent,
    FormsModule,
  ],
})
export class AppComponent {

  value = "https://www.npmjs.com/package/ng-qrcode"
  size = "300"
  errorCorrectionLevel: QrCodeErrorCorrectionLevel = "M"
  errorCorrectionLevels: QrCodeErrorCorrectionLevel[] = ["L", "M", "Q", "H"]
  showImage = "no"
  centerImageSize = ""
  margin = 4
  darkColor?: RGBAColor
  lightColor?: RGBAColor
  scale?: number
  maskPattern?: QRCodeMaskPattern
  copyText = "Copy"

  get centerImageSrc() {
    return this.showImage === "yes" ? "./assets/angular-logo.png" : undefined
  }

  get example() {
    return `<qr-code ${ [
      this.value ? `value="${ this.value }"` : undefined,
      this.size ? `size="${ this.size }"` : undefined,
      this.darkColor ? `darkColor="${ this.darkColor }"` : undefined,
      this.lightColor ? `lightColor="${ this.lightColor }"` : undefined,
      this.errorCorrectionLevel ? `errorCorrectionLevel="${ this.errorCorrectionLevel }"` : undefined,
      this.centerImageSrc ? `centerImageSrc="${ this.centerImageSrc }"` : undefined,
      this.centerImageSize ? `centerImageSize="${ this.centerImageSize }"` : undefined,
      this.margin ? `margin="${ this.margin }"` : undefined,
      this.scale ? `scale="${ this.scale }"` : undefined,
      this.maskPattern ? `maskPattern="${ this.maskPattern }"` : undefined,
    ].filter(Boolean).join("\n\t ") }/>
`
  }

  copyExample() {
    navigator.clipboard.writeText(this.example)
      .then(() => {
        this.copyText = "Copied!"
        setTimeout(() => {
          this.copyText = "Copy"
        }, 2000)
      })
  }
}
