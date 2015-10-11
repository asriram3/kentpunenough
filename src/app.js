var bearerAuth = 'Bearer AAAAAAAAAAAAAAAAAAAAAAoriAAAAAAAa3e7UFfTpyPGxQS6r6Jr8ELoOLw%3DNhiK7NbzqXcyiNhx2ftbx3E6jw3jPrawQOxAQwRNa0mA8JTFdZ';
var URL = 'https://api.twitter.com/1.1/search/tweets.json?q=%23kentpunenough';
//var URL = 'https://api.twitter.com/oauth2/token';
var ajax = require('ajax');

var UI = require('ui');
// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Twitter Puns',
  subtitle:'Fetching...'
});

// Display the Card
card.show();



ajax(
		{
			url: URL,
			type: 'json',
      method: 'GET',
			headers: { 'Authorization' : bearerAuth,'Accept-Encoding':'gzip'}
		},
		function(data) {
			//console.log(data);
      console.log('success');
			console.log(data);
			
			
			
			
    },function(error) {
      console.log("error");
    });