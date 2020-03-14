# 3.1.0 - 2020-03-14
- Support Angular 9
- Dependencies updated
- Export `QrCodeDirective` (though `QrCodeComponent` should be preferred)

# 3.0.2 - 2019-12-13
- Dependencies updated
- Amend README.md to note workarounds for https://github.com/mnahkies/ng-qrcode/issues/2#issuecomment-563414305

# 3.0.1 - 2019-08-11
- Amend README.md

# 3.0.0 - 2019-08-11
- Dependencies updated for Angular 8, Angular 7 support is maintained

** Breaking Changes **
- Type error correction level correctly using string union rather than string.
  This type narrowing may cause a build error if consuming projects are not passing
  a valid value for this input. No change to behavior/code - type only change.

# 2.0.0 - 2019-05-12
- Re-written to use qrcode npm module to generate QR codes
  in browser using JavaScript
  
- Add errorCorrectionLevel input to qr-code component

**Breaking Changes**

- NgModule QRCodeModule renamed to QrCodeModule
- Module re-written, therefore testing recommended when upgrading
