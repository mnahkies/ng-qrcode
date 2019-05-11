import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  value = "https://www.npmjs.com/package/ng-qrcode"
  size = "300"
  errorCorrectionLevel = "M"
  // TODO refactor to QRCodeErrorCorrectionLevel after https://github.com/DefinitelyTyped/DefinitelyTyped/pull/35367
  errorCorrectionLevels = ["L", "M", "Q", "H"]

  get example() {
    return `<qr-code value="${this.value}" size="${this.size}" errorCorrectionLevel="${this.errorCorrectionLevel}"></qr-code>`
  }

}
