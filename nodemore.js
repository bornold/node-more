/* To remove the script later
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-2.1.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
*/
// the nodes that are removelbe
var targets = "*:not(head, html)";

// if key down booleans
var ctrlDown = false;
var altDown = false;

// key mappings
var ctrl = 17;
var alt = 18;
var z = 90;

// array of recently hidden elements
var hidden = [];

$(document).ready(function(){
    $(targets)
        .click(function(e){
           if (ctrlDown && altDown && (e.target == this)) {
                e.preventDefault(); // to prevent links from firing
                e.stopImmediatePropagation(); // this to
                removeNode( $( this ) );
                return false; // and this, don't works all of the time thou
            }
        })
        .mouseenter(function(e) {
            if (ctrlDown && altDown && (e.target == this)) {
                $( this ).fadeTo("fast", 0.33);
            }
        })
        .mouseout(function(e) {
            if ($( this ).is(":visible") ) {
                $( this ).fadeTo("fast", 1);
            }
        });
    $(window)
        .bind('keydown', function(e){
            if(e.keyCode == ctrl ) { //ctrl
                ctrlDown = true;
            } else if(e.keyCode == alt) { //alt
               altDown = true;
            } else if ( ctrlDown && e.keyCode == z && hidden.length > 0) {
               hidden.pop().show(); // show last hidden
            }	
        })
        .bind('keyup', function(e){
            if(e.keyCode == ctrl ) { //ctrl
                ctrlDown = false;
            } else if(e.keyCode == alt) { //alt
                altDown = false;
            }
        })
        .focusout(function() {
            ctrlDown = false;
            altDown = false;
        });
});

function removeNode(node) {
 /*
    hidden.push(node);
    node.hide();
*/
    node.remove();
}
