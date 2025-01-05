import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { QrCodeComponent } from "./qr-code.component"
import { QrCodeDirective } from "./qr-code.directive"

/**
 * @deprecated prefer importing `QrCodeComponent` or `QrCodeDirective` directly
 */
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    QrCodeComponent,
    QrCodeDirective,
  ],
  exports: [
    QrCodeComponent,
    QrCodeDirective,
  ],
})
export class QrCodeModule {
}
