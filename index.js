'use strict';

const basicAuth = require('basic-auth');
const passwordGenerator = require('generate-password');
const PLUGIN_NAME = 'BS Authorization'

/**
 * @param {Object} opts
 * @param {BrowserSync} bs
 */
module.exports['plugin'] = (opts, bs) => {

    opts = Object.assign({
        generatePassword: {
            length: 7,
            numbers: true
        },
        user: 'browsersync',
        pass: false
    }, opts);

    let logger = bs.getLogger(PLUGIN_NAME).info('Access Info:');

    if (typeof opts.logLevel !== 'undefined') {

        logger.setLevel(opts.logLevel);
    }

    if (typeof opts.pass === 'undefined' || !opts.pass) {

        Object.assign(opts, {
            pass: passwordGenerator.generate(opts.generatePassword)
        });
    }

    console.log(' -------------------------------------');
    console.log(`        user: ${opts.user}`);
    console.log(`    password: ${opts.pass}`);
    console.log(' -------------------------------------');

    // add middleware for Authorization
    bs.addMiddleware('', (req, res, next) => {

        let auth = basicAuth(req);

        if (auth && auth.name === opts.user && auth.pass === opts.pass) {
            return next();
        } else {
            res.statusCode = 401;
            res.setHeader('WWW-Authenticate', `Basic realm="${PLUGIN_NAME}"`);
            res.end('Access denied');
        }

    }, {
        id: 'Browsersync Server Authorization Middleware',
        override: true
    });

}