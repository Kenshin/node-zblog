var http = require('http'),
    url = require('./url'),
    events = require("events");

exports = module.exports = new events.EventEmitter();

exports.xml_loader_delegate = function ( config, parameters, event_name ) {

   //format url form config
   var url_var = url.format_url( config );
   
   //get xml
   http.createClient( config.port, config.host )
       .request( 'GET', url_var + parameters )
       .once( 'response', function( response ) {
          var result = '';
          response.addListener( 'data', function( data ) {
             result += data;
          })

          response.addListener( 'end', function() {
          	
          	console.log("call url = " + config.host + ":" + config.port + url_var + parameters);
            
          	exports.emit( event_name + parameters + "_event", result );
          })
          
       })
       .end();
}