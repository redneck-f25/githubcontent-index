( function() {
"use strict";

var myhostname = 'friday.w3tools.de';
var myusername = 'redneck-f25';
var pathsplit = location.pathname.split( '/' ).slice( -4 );
if ( location.host !== myhostname && pathsplit.shift() === myusername ) {
    var url = 'https://' + myhostname + '/githubcontent/' + pathsplit.join( '/' );
    if ( window === top ) {
        location.replace( url );
    } else {
        top.location = location;
    }
} else if ( window !== top ) {
    top.location = location;
}
var script = document.getElementById('githubcontent_script');
script.parentElement.removeChild(script);

})();
