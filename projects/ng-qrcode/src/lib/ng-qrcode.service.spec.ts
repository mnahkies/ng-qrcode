import { TestBed } from "@angular/core/testing"

import { NgQrcodeService } from "./ng-qrcode.service"

describe("NgQrcodeService", () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it("should be created", () => {
    const service: NgQrcodeService = TestBed.get(NgQrcodeService)
    expect(service).toBeTruthy()
  })
})
