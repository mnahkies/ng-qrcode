import { ComponentFixture, TestBed } from "@angular/core/testing"

import { QrCodeComponent } from "./qr-code.component"
import { QrCodeDirective } from "./qr-code.directive"

describe("QrCodeComponent", () => {
  let component: QrCodeComponent
  let fixture: ComponentFixture<QrCodeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QrCodeComponent,
        QrCodeDirective,
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
