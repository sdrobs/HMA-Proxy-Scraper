/**
 * Created by Ran on 15-Sep-15.
 */
var hma = require('./scraper');

hma.getProxies(function (proxies) {
    console.log(proxies);
}, function (error) {
    console.log("An error occurred: " + error);
});
