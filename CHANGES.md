# 7.0.0 - 2022-06-16
- Support Angular 14 (#58)
- Lockfile maintenance (#62)

# 6.0.0 - 2021-11-20
- Support Angular 13
- Lockfile maintenance

# 5.2.0 - 2021-10-17
- Support `darkColor` and `lightColor` inputs
- Lockfile maintenance

# 5.1.1 - 2021-10-03
- Dependencies updated, rebuild with latest angular-devkit

# 5.1.0 - 2021-10-03
- Support configuring margin around the qr code (rendered within the canvas element)

# 5.0.0 - 2021-06-17
- Support Angular 12
- Enable "partial-ivy" distribution format - https://angular.io/guide/creating-libraries#building-libraries-with-ivy

*BREAKING CHANGES:* Dropped support for angular versions prior to v12, require applications to be using Ivy rather than deprecated ViewEngine.

# 4.3.0 - 2021-10-03
(backport release of changes in 5.1.0)
- Support configuring margin around the qr code (rendered within the canvas element)

# 4.2.0 - 2021-04-11
- Support rendering an image in the center of the generated QR code
- Use default error correction level correctly if undefined is passed to the input
- Documentation improvements

# 4.1.0 - 2020-11-14
- Support Angular 11

# 4.0.1 - 2020-09-04
- Forgot to include README in 4.0.0

# 4.0.0 - 2020-09-04
- Support Angular 10
- Dependencies updated

*BREAKING CHANGES:* Dropped support for angular versions prior to v10

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
- Dependencies updated for Angular 8, Angular 7 support retained

** Breaking Changes **
- Type error correction level correctly using string union rather than string.
  This type narrowing may cause a build error if consuming projects are not passing
  a valid value for this input. No change to behavior/code - type only change.

# 2.0.0 - 2019-05-12
- Re-written to use qrcode npm module to generate QR codes
  in browsers using JavaScript
  
- Add errorCorrectionLevel input to qr-code component

**Breaking Changes**

- NgModule QRCodeModule renamed to QrCodeModule
- Module re-written, therefore testing recommended when upgrading
