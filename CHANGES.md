# Next (unreleased)
- Type error correction level correctly using string union rather than string

# 2.0.0 - 2019-05-12
- Re-written to use qrcode npm module to generate QR codes
  in browser using JavaScript
  
- Add errorCorrectionLevel input to qr-code component

**Breaking Changes**

- NgModule QRCodeModule renamed to QrCodeModule
- Module re-written, therefore testing recommended when upgrading
