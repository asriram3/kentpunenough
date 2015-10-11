var encodedAuth = 'MmR6ZkpsdlJOdndvRzFkcGdpejBxczl0WTpqb0NQN29Ua2xBdUVzd29jRGwwMTJTTzAxVUxybE1LRVVBMlZvNVZLYjJ1RHRRazc1TQ==';
//var URL = 'https://api.twitter.com/1.1/search/tweets.json?q=#kenthackenough';
var URL = 'https://api.twitter.com/oauth2/token';
//var ajax = require('ajax');
//var token;
ajax(
		{
			url: URL,
			type: 'json',
      method: 'post',
			headers: { 'Authorization' : encodedAuth,
      'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Length': 29,
                'Accept-Encoding':'gzip'},
      data: 'grant_type=client_credentials'
		},
		function(data) {
			//console.log(data);
      console.log('success');
    },function(error) {
      console.log("error");
    });