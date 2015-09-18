#! /usr/bin/env node

/**
 * Created by Ran on 15-Sep-15.
 */
var hma = require('../scraper');
var Spinner = require('clui').Spinner;

var spinner = new Spinner('Fetching');
spinner.start();

hma.getProxies(function (proxies) {
	spinner.stop()
    console.log(proxies.join(require('os').EOL));
}, function (error) {
    console.error("An error occurred: " + error);
});
