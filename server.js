// server.js

// modules =================================================
var http           	= require('http');
var express        	= require('express');
var app            	= express();
var path 			      = require('path');

// configuration ===========================================

if(process.env.NODE_ENV === 'production'){
    // app.use(express.static(__dirname + "/dist"));
    // app.all('/*', function(req, res) {
    //   res.sendFile(express.static(path.join(__dirname + "/dist/index.html")));
    // });
    app.use(express.static(__dirname + '/dist'));
    app.use(express.static(__dirname + '/api'));
    app.use(express.static(__dirname + '/fonts'));
    app.use(express.static(__dirname + '/images'));        
    app.use(express.static(__dirname + '/scripts'));        
    app.use(express.static(__dirname + '/styles'));  
    
    app.all('/*', function(req, res, next) {
        // Just send the index.html for other files to support HTML5Mode
        res.sendFile('/dist/index.html', { root: __dirname });
    });

    console.log('using production settings...');
}
else{
    app.use(express.static(__dirname + "/app"));
    app.use('/bower_components', express.static(path.join(__dirname + "/bower_components")));
    app.use('/node_modules', express.static(path.join(__dirname + "/node_modules")));
    console.log('using development settings...');
}

var port = process.env.PORT || 8080;
var server = http.createServer(app);
server.listen(port);

console.log('Server running on port ' + port);

process.on('exit', function(){
  server.stop()
})
