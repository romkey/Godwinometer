var data = require("sdk/self").data;

// Browser.js for Firefox
var OurBrowser = {
    url: function( name ) {
	return data.url( name );
    }
};
