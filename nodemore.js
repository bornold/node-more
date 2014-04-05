var targets = "*:not(head, html)"
var ctrlDown = false;
var altDown = false;

$(document).ready(function(){
   $(targets).click(function(e){
    if (ctrlDown && altDown && (e.target == this)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        removeDiv($(this));
        return false;
    }
  });
});

// hide or remove?
function removeDiv(div) {
    div.hide();
}

// toggle if keydown
$(window).bind('keydown', function(e){
    if(e.keyCode == 17 ) { //ctrl
        ctrlDown = true;
    } else if(e.keyCode == 18) { //alt
           altDown = true;
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

