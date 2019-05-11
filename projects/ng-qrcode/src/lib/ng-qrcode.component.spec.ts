import { ComponentFixture, TestBed } from "@angular/core/testing"

import { NgQrcodeComponent } from "./ng-qrcode.component"

describe("NgQrcodeComponent", () => {
  let component: NgQrcodeComponent
  let fixture: ComponentFixture<NgQrcodeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgQrcodeComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQrcodeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
