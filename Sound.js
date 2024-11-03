document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");
    audio.play().catch(error => {
        console.log("Autoplay was prevented:", error);
    });
});