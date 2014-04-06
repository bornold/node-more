var targets = "*:not(head, html)"
var ctrlDown = false;
var altDown = false;
var hidden = [];
//var bgcolor;
$(document).ready(function(){
   $(targets).click(function(e){
    if (ctrlDown && altDown && (e.target == this)) {
        e.stopImmediatePropagation();
        e.preventDefault();
        removeDiv($(this));
        return false;
    }
  });
});
/*
$( targets )
  .mouseover(function(e) {
     if (ctrlDown && altDown && (e.target == this)) {
//            bgcolor = $( this ).css( "background-color" );
//            $( this ).css( "background-color", "red" );
            $( this ).fadeTo("fast", 0.33);

    }
  })
  .mouseout(function(e) {
     if ($( this ).is(":visible") ) {
//            $( this ).css( "background-color", bgcolor );
            $( this ).fadeTo("fast", 1);
     }
  });
*/

// hide or remove?
function removeDiv(div) {
    hidden.push(div);
    div.hide();
}

// toggle if keydown
$(window).bind('keydown', function(e){
    if(e.keyCode == 17 ) { //ctrl
        ctrlDown = true;
    } else if(e.keyCode == 18) { //alt
           altDown = true;
    } else if(ctrlDown && e.keyCode == 90 && hidden.length > 0) { // show last hidden
        hidden.pop().show();
    }
});

// toggle if key up
$(window).bind('keyup', function(e){
    if(e.keyCode == 17 ) { //ctrl
        ctrlDown = false;
    } else if(e.keyCode == 18) { //alt
       altDown = false;
    }
});

