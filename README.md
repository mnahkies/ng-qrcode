# Angular QR Code Generator

[![Build Status](https://travis-ci.org/mnahkies/ng-qrcode.svg?branch=master)](https://travis-ci.org/mnahkies/ng-qrcode)
[![npm](https://img.shields.io/npm/v/ng-qrcode.svg)](https://www.npmjs.com/package/ng-qrcode)

Easy to use AOT compatible QR code generator for Angular projects.

Features:
* Compatible with Angular 7, 8 and 9
* Leverages the widely used [qrcode](https://www.npmjs.com/package/qrcode) 
  package to do the heavy lifting
* Renders to HTML Canvas

**[Change Log](CHANGES.md)**

## Installation
Add as a dependency to your angular application:

    npm install ng-qrcode --save

## Usage
Import into your consuming module (Eg: AppModule):

     import { QrCodeModule } from 'ng-qrcode';
     
     @NgModule({
       imports: [
         QrCodeModule
       ]
     })

### Component

    <qr-code value="Yo world!" size="300" errorCorrectionLevel="M"></qr-code>

#### value: string (required)  
The value to encode in the QR code, eg: a url

#### size: string | number (optional)
An optional size in pixels to render at

**Default:** automatic size based on the value provided (recommended)

#### errorCorrectionLevel: string (optional)
Controls the amount of redundant information included to make the QR code 
more likely to scan correctly if it is dirty / damaged

**Default:** "M"

Valid values: "L", "M", "Q", "H" - where "L" is the lowest 
amount of redundancy, and "H" is the highest

See: https://www.npmjs.com/package/qrcode#error-correction-level for further details

# Demo
**[See running demo here](https://mnahkies.github.io/ng-qrcode/)**  

A demo app is included in the repository under `projects/ng-qrcode-demo` which can be 
run locally using `ng build && ng serve`

# Known/Common Issues

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
