var Godwinometer = {
    keywords: [ "hitler", "nazi", "facist", "reich", "adolph", "dictator", "socialist" ],

    // get text. scan for keywords. display results.

    // if this doesn't get enough text check out http://stackoverflow.com/questions/9533860/jquery-get-the-text-of-all-elements-in-a-page

    init: function() {
	var text = $( 'body' ).text();
	var total = 0;

	console.log( 'Godwin-O-Meter Init' );

	for (var i = 0; i < Godwinometer.keywords.length; i++) {
	    // global match, ignore case
	    var matches = text.match( new RegExp( Godwinometer.keywords[ i ], 'gi'  ) );

	    if( matches != undefined ) {
		console.log( 'Godwin match on ' + Godwinometer.keywords[ i ] + ' is ' + matches.length );
		total += matches.length;
	    }
	}

	console.log( 'Godwin value ' + total );

	// don't bother if we have nothing to say
	if( total > 0 ) {
	    $( 'body' ).prepend( 'Godwin Count ' + total );
	}
    }
};

// fire init when jQuery is ready
$( document ).ready( function() { Godwinometer.init(); } );
