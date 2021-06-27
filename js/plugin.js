
 // Start BUtton Header
var btn = document.getElementById("btn");

function hoverButton() {
    btn.style.backgroundColor = "#02dba1";
}

function outHover() {
    btn.style.backgroundColor = "#00BC8A";
}
// End Button Header

// Start Details Section
var btn2 = document.getElementById("btn2"),
    otherElement = document.getElementById("other");

function hoverButton2() {
    btn2.style.backgroundColor = "#777";
    btn2.style.color = "#FFF";
}

function outHover2() {
    btn2.style.backgroundColor = "#FFF";
    btn2.style.color = "#333";
}

function show(){
    otherElement.style.display = "block";
}

function hide() {
    otherElement.style.display = "none";
}

// End Details Section

// Start Info

var count = 0;

function counter() {
    count += 1;
    document.getElementById("img1").innerHTML = count; 
}
// End Info

// Start Contact Us
var twi = document.getElementById("twitt");

function colored() {
    twi.style.color = "#03A9F4";
}
// End Contact Us


// Validation Page

function valid() {
    var t = prompt("Name....");

    if (t == "hamza") {
        window.location = "index.html";
    }else {
        alert("Error");
    }
}

