# bs-auth <sup>[1.0.0](https://github.com/tazau/bs-auth/blob/master/CHANGELOG.md)</sup>

> [Browsersync](https://browsersync.io/) basic authorization middleware plugin

## Install
`npm i browser-sync bs-auth`

## Usage

Browsersync [plugins configure](https://browsersync.io/docs/options#option-plugins)

## Default plugin options
```javascript
generatePassword: {
    length: 7,
    numbers: true
},
user: 'browsersync',
pass: false // if pass false or not set, plugin generate random password
```
`generatePassword` options from [generate-password](https://www.npmjs.com/package/generate-password)