import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { QrCodeModule } from "ng-qrcode"
import { AppComponent } from "./app.component"

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QrCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
