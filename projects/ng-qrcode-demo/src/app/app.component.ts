import { Component } from "@angular/core"
import { QrCodeErrorCorrectionLevel } from "ng-qrcode"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  value = "https://www.npmjs.com/package/ng-qrcode"
  size = "300"
  errorCorrectionLevel: QrCodeErrorCorrectionLevel = "M"
  errorCorrectionLevels: QrCodeErrorCorrectionLevel[] = ["L", "M", "Q", "H"]
  showImage = "no"
  centerImageSize = ""

  get centerImageSrc() {
    return this.showImage === "yes" ? "./assets/angular-logo.png" : undefined
  }

  get example() {
    return `
<qr-code value="${this.value}"
         size="${this.size}"
         errorCorrectionLevel="${this.errorCorrectionLevel}"
         centerImageSrc="${this.centerImageSrc}"
         centerImageSize="${this.centerImageSize ? parseInt(this.centerImageSize, 10) : undefined}">
</qr-code>`
  }

}
