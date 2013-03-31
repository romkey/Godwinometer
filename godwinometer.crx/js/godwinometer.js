// get text. scan for keywords. display results.
var Godwinometer = {
    keywords: [ "hitler", "nazi", "facist", "reich", "adolph", "dictator", "socialist" ],


    // if this doesn't get enough text check out http://stackoverflow.com/questions/9533860/jquery-get-the-text-of-all-elements-in-a-page

    init: function() {
	var text = $( 'body' ).text();
	var total = 0;

	for (var i = 0; i < Godwinometer.keywords.length; i++) {
	    // global match, ignore case
	    var matches = text.match( new RegExp( Godwinometer.keywords[ i ], 'gi'  ) );

	    if( matches != undefined ) {
		total += matches.length;
	    }
	}

	// don't bother if we have nothing to say
	if( total == 0 ) {
	    return;
	}

	// the current score of the Wikipedia page is 687, so we use that as our 100% weight
	var score = total / 687;

	// build the div
	var div = '<div id="godwinometer" style="-webkit-transform-origin: 0 0; -webkit-transform: scale(.5,.5);">';
	div += '<span style="font-family: helvetica; font-size: 4em; font-weight: 900;">' + total + '</span>';

	div += '<div style="position: relative">';
	div += '    <div class="graylayer"></div>';
	for( var i = 1 ; i <= 10 ; i++ ) {
	    div += '    <img src="' + OurBrowser.url( 'images/icon128.png' ) + '" title="' + i + ' hitlers" class="hitler" style="-webkit-transform: rotate(' + ( 10 - Math.floor((Math.random()*20)+1) ) + 'deg)" />';
	}

	div += '    </div>';
	div += '    <a href="http://en.wikipedia.org/wiki/Godwin&#39;s_law" style="font-size: 2em;">Godwin&#39;s Law</a>';
	div += '</div>';

	$( 'body' ).append( div );

	// if it gets clicked on, hide it
	$( '#godwinonmeter' ).click( function() { $( '#godwinometer' ).hide(); } );
    }
};

// fire init when jQuery is ready
$( document ).ready( function() { Godwinometer.init(); } );
