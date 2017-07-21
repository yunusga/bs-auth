# bs-auth <sup>[1.0.1](https://github.com/tazau/bs-auth/blob/master/CHANGELOG.md)</sup>

[![bs-auth on NPM](https://nodei.co/npm/bs-auth.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bs-auth/)

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
            module: "bs-auth",
            options: {
                user: 'user',
                pass: 'password'
            }
        }
    ]
})
```

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