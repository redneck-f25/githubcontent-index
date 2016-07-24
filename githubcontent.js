( function() {
"use strict";

var myhostname = 'friday.w3tools.de';
var myusername = 'redneck-f25';
var pathsplit = location.pathname.split( '/' ).slice( -4 );
if ( location.host !== myhostname && pathsplit.shift() === myusername ) {
    top.location.replace( 'https://' + myhostname + '/githubcontent/' + pathsplit.join( '/' ) );
}

})();
