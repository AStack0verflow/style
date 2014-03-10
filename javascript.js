// get the width of the textarea minus scrollbar
var panelWidth = document.getElementById("panel_left").scrollWidth + 20;

// width of our wrapper equals width of the inner part of the textarea
document.getElementById("panel_left_contents").style.width = panelWidth + "px";