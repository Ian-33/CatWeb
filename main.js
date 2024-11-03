const Button = document.querySelector("button.No");

if (Button) {
    Button.addEventListener("mouseover", moveHover);
}

function moveHover() {
    const maxWidth = window.innerWidth - Button.offsetWidth; 
    const maxHeight = window.innerHeight - Button.offsetHeight;

    const A = Math.floor(Math.random() * maxWidth) + 1;
    const B = Math.floor(Math.random() * maxHeight) + 1;

    Button.style.left = A + "px";
    Button.style.top = B + "px";
}