var request = require('request')

httpProxies = {}


getProxies(1)

function getProxies(index){

	var i = ((index == 1) ? '' : index);
	fakeNums = {}

	request('http://www.hidemyass.com/proxy-list/' + i,function(err,res,body){
		if(!res || res.statusCode != 200)
			throw "Response code was not 200"

		var ips = []
		var ports = []
		var types = []

		body.replace(/\.(.*?)\{display\:none\}/g, function () {
		    //arguments[0] is the entire match
		    fakeNums[arguments[1]] = 1
		})

		body.replace(/<td>(.*?)<\/td>/g, function () {
			if(arguments[1] == "HTTP" || arguments[1] == "HTTPS" || arguments[1] == "socks4/5")
				types.push(arguments[1])
		})

		var trim = body
		trim = trim.replace(/\s/g,'')

		trim.replace(/<td>([0-9]+)<\/td>/g, function () {
			ports.push(arguments[1])
		})

		body.replace(/<\/style>(.*?)<\/td>/g, function () {
		    var temp = arguments[1]
		    temp = temp.replace(/<span class\=\"(.*?)\">.*?<\/span>/g,function(){
		    	if(fakeNums[arguments[1]]){
		    		return ''
		    	}
		    	return arguments[0]
		    })
		    temp = temp.replace(/<span style\=\"display\:none\">(.*?)<\/span>/g,"")
		    temp = temp.replace(/<div style\=\"display\:none\">(.*?)<\/div>/g,"")
		    temp = temp.replace(/<(.*?)>/g,'')
		    ips.push(temp)
		})
		var count = 0
		
		if(ips.length > 0){
			if(ports.length == 0 || ports.length != ips.length || ips.length != types.length)
				throw "Regex parsing has failed."

			for(var i = 0; i < ips.length; i++){
				if(types[i] == 'HTTP'){
					count++
					httpProxies[ips[i]] = ports[i]
				}
			}

			console.log('collected ' + count + ' http proxies from page ' + index)

			getProxies(index+1)
		}
		else{
			callback()
		}
		
	})
}

function callback(){
	console.log(httpProxies)
}
