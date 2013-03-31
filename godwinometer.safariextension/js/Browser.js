// Browser.js for Chrome
var OurBrowser = {
    url: function( name ) {
	return chrome.extension.getURL( name );
    }
};
