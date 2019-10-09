var url = new URL(window.location.href);
var text = url.searchParams.get("text");

if (!text) {
    text = "HELLO!";
}

if (text) {
    var display = document.getElementById("display");
    display.innerHTML = text.replace("\\n", "<br>");
    display.style.fontSize = (100 / text.length) + 'vw';
}