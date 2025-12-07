import { provideZonelessChangeDetection } from "@angular/core"
import { TestBed } from "@angular/core/testing"
import { getIntOrDefault, getOptionalInt } from "ng-qrcode"

describe("QrCode Directive", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [provideZonelessChangeDetection()]
    })
      .compileComponents()
  })

  describe("getOptionalInt", () => {
    it("returns undefined when passed undefined", () => {
      expect(getOptionalInt(undefined)).toBeUndefined()
    })
    it("returns undefined when passed empty string", () => {
      expect(getOptionalInt("")).toBeUndefined()
    })
    it("returns number when passed number", () => {
      expect(getOptionalInt(5)).toBe(5)
      expect(getOptionalInt(2)).toBe(2)
    })
    it("parses string when passed string", () => {
      expect(getOptionalInt("5.5")).toBe(5.5)
      expect(getOptionalInt("2")).toBe(2)
    })
  })
  describe("getIntOrDefault", () => {
    it("returns the value when present", () => {
      expect(getIntOrDefault("5", 12)).toBe(5)
      expect(getIntOrDefault(2, 12)).toBe(2)
    })
    it("returns the default otherwise", () => {
      expect(getIntOrDefault("", 12)).toBe(12)
      expect(getIntOrDefault(undefined, 12)).toBe(12)
    })
  })
})
