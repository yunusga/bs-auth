# bs-auth <sup>[1.1.6](https://github.com/tazau/bs-auth/blob/master/CHANGELOG.md)</sup>

[![npm](https://img.shields.io/npm/v/bs-auth.svg)](https://www.npmjs.com/package/bs-auth) [![npm](https://img.shields.io/npm/l/bs-auth.svg)](https://www.npmjs.com/package/bs-auth) [![npm](https://img.shields.io/npm/dm/bs-auth.svg)](https://www.npmjs.com/package/bs-auth)

> [Browsersync](https://browsersync.io/) basic authorization middleware plugin

## Install
`npm i browser-sync bs-auth`

## Usage
```javascript
const bs = require('browser-sync').create();

bs.use(require('bs-auth'), {
    user: 'user',
    pass: 'password'
});
```

or

```javascript
const bs = require('browser-sync').create();

bs.init({
    ... some options
    plugins: [
        {
            module: 'bs-auth',
            options: {
                user: 'user',
                pass: 'password'
            }
        }
    ]
}, () => {
    bs.getOption('bsAuth'); // get plugin current options
});
```

Browsersync [plugins configure](https://browsersync.io/docs/options#option-plugins)

## Default plugin options
```javascript
generatePassword: {
    length: 7,
    numbers: true
},
user: 'browsersync',
pass: false, // if not set or false, plugin generate random password
use: true
```
`generatePassword` options from [generate-password](https://www.npmjs.com/package/generate-password)