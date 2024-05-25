# Angular QR Code Generator

[![Build Status](https://github.com/mnahkies/ng-qrcode/actions/workflows/ci.yml/badge.svg)](https://github.com/mnahkies/ng-qrcode/actions/workflows/ci.yml?query=branch%3Amaster)
[![npm](https://img.shields.io/npm/v/ng-qrcode.svg)](https://www.npmjs.com/package/ng-qrcode)

Easy to use QR code generator for Angular projects.

**Features:**
* Compatible with Angular 18
* Leverages the widely used [qrcode](https://www.npmjs.com/package/qrcode) 
  package to do the heavy lifting
* Renders to HTML Canvas

**[Change Log](CHANGES.md)**

<!-- toc -->

  - [Installation](#installation)
  - [Usage](#usage)
    - [Component](#component)
      - [value: string (required)](#value-string-required)
      - [size: string | number (optional)](#size-string--number-optional)
      - [darkColor: RGBAColor (optional)](#darkcolor-rgbacolor-optional)
      - [lightColor: RGBAColor (optional)](#lightcolor-rgbacolor-optional)
      - [style: { [klass: string]: any; } (optional)](#style--klass-string-any--optional)
      - [styleClass: string (optional)](#styleclass-string-optional)
      - [errorCorrectionLevel: string (optional)](#errorcorrectionlevel-string-optional)
      - [centerImageSrc: string (optional)](#centerimagesrc-string-optional)
      - [centerImageSize: string | number (optional)](#centerimagesize-string--number-optional)
      - [margin: number (optional)](#margin-number-optional)
    - [Directive](#directive)
- [Demo](#demo)
- [Angular compatibility matrix](#angular-compatibility-matrix)
- [Known / Common Issues](#known--common-issues)
  - [Reference Error 'global' is not defined](#reference-error-global-is-not-defined)
- [Footnote / Package History](#footnote--package-history)

<!-- tocstop -->

## Installation
Add as a dependency to your angular application:

    npm install ng-qrcode --save

## Usage
Import into your consuming module (Eg: AppModule):

```typescript
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    QrCodeModule
  ]
})
```

### Component
```angular17html
<qr-code value="Hello world!" 
         size="300" 
         errorCorrectionLevel="M" />
``` 

#### value: string (required)  
The value to encode in the QR code, eg: a url

#### size: string | number (optional)
An optional size in pixels to render at

**Default:** automatic size based on the value provided (recommended)

#### darkColor: RGBAColor (optional)
An RGBA Hex string to use as the color for the dark / filled modules.
If an invalid value is passed, the default will be used.

**Default** black ("#000000FF")

#### lightColor: RGBAColor (optional)
An RGBA Hex string to use as the color for the empty space.
If an invalid value is passed, the default will be used.

**Default** white ("#FFFFFFFF")

#### style: { [klass: string]: any; } (optional)
Inline style object, passed to the inner canvas element as `[ngStyle]`

#### styleClass: string (optional)
CSS Class, passed to the inner canvas element

#### errorCorrectionLevel: string (optional)
Controls the amount of redundant information included to make the QR code 
more likely to scan correctly if it is dirty / damaged

**Default:** "M"

Valid values: "L", "M", "Q", "H" - where "L" is the lowest 
amount of redundancy, and "H" is the highest

See: https://www.npmjs.com/package/qrcode#error-correction-level for further details

#### centerImageSrc: string (optional)
A URI suitable to use an a [Image](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) src
property to load and render in the center of the QR code.

**Note:** the image will obscure part of the QR code, and therefore you should err on
the side of a higher error correction level, anecdotally when the size is less than 1/4
of the size of the code, with at least "M" error correction, it is generally still scannable.

#### centerImageSize: string | number (optional)
An optional size in pixels to render the center image.

**Default:** 60

#### margin: number (optional)
An optional amount of margin to be rendered within the canvas element. Defaults to 4,
where the unit is the size of one "dot" in the QR code.

### Directive
If the provided component is not flexible enough for you, there is also a [directive](projects/ng-qrcode/src/lib/qr-code.directive.ts)
provided that is used by the [component](projects/ng-qrcode/src/lib/qr-code.component.ts) under the hood, which provides finer 
grain control.

# Demo
**[See running demo here](https://mnahkies.github.io/ng-qrcode/)**  

A demo app is included in the repository under `projects/ng-qrcode-demo` which can be 
run locally using `ng build && ng serve`

# Angular compatibility matrix
See table below for a history of versions and their Angular compatibility.

From version 16 onwards the library major version will match the Angular 
major version.

| Angular Version | ng-qrcode Versions |
|-----------------|--------------------|
| ^18             | ^18                |
| ^17             | ^17                |
| ^16             | ^16                |
| ^15             | ^8                 |
| ^14             | ^7                 |
| ^13             | ^6                 |
| ^12             | ^5                 |
| ^10 / ^11       | ^4                 |
| ^7 / ^8         | ^3                 |
| ^7              | ^2                 |


# Known / Common Issues

## Reference Error 'global' is not defined
Essentially in some cases Angular will bundle a version of the buffer library that is not
compatible with web browsers if the 'global' object is not defined.

This can be easily worked around, see comment here for options:
https://github.com/mnahkies/ng-qrcode/issues/2#issuecomment-563414305

# Footnote / Package History

Pre-version 2.0.0 this package was developed by [emin93](https://github.com/emin93) and used the `qrious`
npm package to generate the QR Codes.

The source for this was lost, and this repository is a re-write, first released 
as v2.0.0 that uses the `qrcode` npm package to generate QR Codes.

v2.0.0 should be backwards compatible, aside from a rename of the exported NgModule from 
QRCodeModule -> QrCodeModule for consistency.
