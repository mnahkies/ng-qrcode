import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { QrCodeComponent, QrCodeErrorCorrectionLevel, RGBAColor } from "ng-qrcode"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    QrCodeComponent,
    FormsModule,
  ]
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

  get centerImageSrc() {
    return this.showImage === "yes" ? "./assets/angular-logo.png" : undefined
  }

  get example() {
    return `
<qr-code value="${ this.value }"
         size="${ this.size }"${ this.darkColor ? `
         darkColor="${ this.darkColor }"` : "" }${ this.lightColor ? `
         lightColor="${ this.lightColor }"` : "" }
         errorCorrectionLevel="${ this.errorCorrectionLevel }"
         centerImageSrc="${ this.centerImageSrc }"
         centerImageSize="${ this.centerImageSize ? parseInt(this.centerImageSize, 10) : undefined }"
         [margin]="${ this.margin }">
</qr-code>`
  }

}
