HMA-Proxy-Scraper
=================

A node.js module to pull/parse working http(s) proxies from Hidemyass.com

Installation:
```
$ npm install hma-proxy-scraper
```


Usage is as follows:
```
var hma = require('hma-proxy-scraper');

hma.getProxies(function (err,proxies) {
    if(err)
    	throw err
   	
   	console.log(proxies)
});

```

Output is in the form of key:value --> IP : Port.
```
{ 
  '202.118.236.130' : '3128',
  '111.11.27.194'   : '80',
  '183.136.221.6'   : '3128',
  '183.207.228.58'  : '80',
  '190.106.66.178'  : '3128',
  '61.55.141.10'    : '81',
  '124.67.215.9'    : '80',
  ...etc
}
```
