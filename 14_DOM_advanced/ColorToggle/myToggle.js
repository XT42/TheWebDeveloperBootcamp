/**
 * Created by acaliano on 07.05.17.
 */
var myButton = document.getElementById("myButton");
var myBody = document.querySelector("body");

myButton.addEventListener("click", toggleBackgroundColor);

function toggleBackgroundColor() {
    if (myBody.style.backgroundColor === "white") {
        myBody.style.backgroundColor = "purple";
    } else {
        myBody.style.backgroundColor = "white";
    }
}