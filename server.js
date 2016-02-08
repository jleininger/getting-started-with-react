var https = require('https'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 8888;
    
app.use(express.static('dist'));    

app.get('/twitterfeed/:username', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/xml'
    });
    var rssReq = https.get('https://twitrss.me/twitter_user_to_rss/?user=' + req.params.username, 
        function(rssRes) {
            var xml = '';
            rssRes.on('data', function(chunk) {
                xml += chunk;    
            });
            rssRes.on('end', function(){
                res.end(xml);
                console.log('>>>DONE>>>');    
            });
            rssRes.on('error', function() {
                console.log('Failed to fetch RSS');
            });
    });
});

app.listen(port, function() {
    console.log('Server up and running at: ' + port);    
});