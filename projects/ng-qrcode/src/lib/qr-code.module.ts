import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { QrCodeComponent } from "./qr-code.component"
import { QrCodeDirective } from "./qr-code.directive"

@NgModule({
  declarations: [
    QrCodeComponent,
    QrCodeDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    QrCodeComponent,
    QrCodeDirective,
  ],
})
export class QrCodeModule {
}
