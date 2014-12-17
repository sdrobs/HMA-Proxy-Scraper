HMA-Proxy-Scraper
=================

Uses node.js to pull/parse working http proxies from Hidemyass.com

Runs callback function on completion. Input miscellaneous ops iterating the proxies here in order to switch proxies on each request (eg. changing your ip address on each request).

Output in the form of key:value --> IP : Port.
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
