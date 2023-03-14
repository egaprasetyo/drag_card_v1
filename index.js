$("#launchPad").height($(window).height() - 20);
var dropSpace = $(window).width() - $("#launchPad").width();
$("#dropZone").width(dropSpace - 70);
$("#dropZone").height($("#launchPad").height());

$(".card").draggable({
    appendTo: "#launchPad",
    cursor: "move",
    helper: 'clone',
    revert: "invalid",

});

$("#launchPad").droppable({
    tolerance: "intersect",
    accept: ".card",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {
        $("#launchPad").append($(ui.draggable));
    }
});

$(".stackDrop").droppable({
    tolerance: "intersect",
    accept: ".card",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {        
        $(this).append($(ui.draggable));
    }
});