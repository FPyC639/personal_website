// JavaScript to handle the button click and show the iframe
document.addEventListener("DOMContentLoaded", function() {
    var resumeButton = document.getElementById("resume-button");
    var resumeDiv = document.getElementById("resume-div");
    resumeButton.addEventListener("click", function () {
        resumeDiv.style.display = "block"; // Show the div
    });
});