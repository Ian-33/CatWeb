document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");
    const message = document.getElementById("play-audio-message");

    function playAudio() {
        audio.play().then(() => {
            message.style.display = "none";
        }).catch(error => {
            console.log("Autoplay was prevented:", error);
        });
    }

    message.addEventListener("click", playAudio);
});
