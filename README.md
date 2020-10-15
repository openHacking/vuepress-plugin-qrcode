<div align="center">

Vuepress Plugin Qrcode

![GitHub package.json version](https://img.shields.io/github/package-json/v/openHacking/vuepress-plugin-qrcode?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/openHacking/vuepress-plugin-qrcode?style=flat-square)](https://github.com/openHacking/vuepress-plugin-qrcode)
</div>

English| [简体中文](./README-zh.md)

## Introduction
Vuepress Plugin Qrcode is a Vuepress plugin that displays the QR code of the current URL for mobile devices to scan.

## Installation

```sh
yarn add -D vuepress-plugin-qrcode
# OR npm install -D vuepress-plugin-qrcode
```

## Usage

Use without configuration
```js
module.exports = {
  plugins: ['qrcode']
}
```
Or, set optional configuration
```js
module.exports = {
  plugins: [
    ['qrcode',{
        labelText:'Mobile Read',
        size:'small'
    }]
  ]
}
```

## Configuration(optional)

### labelText
- Type: `string`
- Default: `Mobile Read`   
Click the button to pop up the QR code, the text of the button

### size
- Type: `string | number`
- Default: `small`    
Set the size of the QR code, the possible values are
    - `small`: Represents 100px * 100px
    - `medium`: Represents 150px * 150px
    - `big`: Represents 200px * 200px

    Or set a specific value you think is appropriate, such as
    - `80`: Represents 80px * 80px
    - `120`: Represents 120px * 120px
