import { provideZonelessChangeDetection } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { QrCodeComponent } from "./qr-code.component"

describe("QrCodeComponent", () => {
  let component: QrCodeComponent
  let fixture: ComponentFixture<QrCodeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        QrCodeComponent,
      ],
      providers: [provideZonelessChangeDetection()]
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
