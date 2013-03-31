var data = require("sdk/self").data;
var pageMod = require( "sdk/page-mod" );
 
pageMod.PageMod( {
    include: "*",
    contentScriptFile: [ data.url( 'jquery-1.9.1.min.js' ), data.url( 'Browser.js' ), data.url( 'godwinometer.js' ) ]
} );
