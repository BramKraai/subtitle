// Get Text from URL Paramter
var text = decodeURIComponent(window.location.href.split("text=")[1]);

// Give Hint to User in case URL parameter is missing
if (text == "undefined") {
    text = "To display Text:\\nAdd it via the text URL parameter";
}

// Display Text, adding line breaks where there is a \n
var display = document.getElementById("display");
display.innerHTML = text.replace("\\n", "<br>");

// Figure out the maximum line length and setting font size accordinglyu
var line_length_max = 0;
var lines = text.split("\\n");
for (var i=0; i<lines.length; i++){
    var line = lines[i];
    if (line.length > line_length_max) {
        line_length_max = line.length;
    }
}

display.style.fontSize = (150 / line_length_max) + 'vw';
