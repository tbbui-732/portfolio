const cursorInner = document.querySelector('.cursor-inner');
const cursorOuter = document.querySelector('.cursor-outer');

let posX = 0, posY = 0; // Inner dot position
let trailingX = 0, trailingY = 0; // Outer ring position

// inner cursor follows mouse
document.addEventListener("mousemove", (e) => {
    posX = e.clientX;
    posY = e.clientY;

    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;
});

// outer cursor animation
function animateOuterCursor() {
    trailingX += (posX - trailingX) * 0.1;
    trailingY += (posY - trailingY) * 0.1;

    cursorOuter.style.left = `${trailingX}px`;
    cursorOuter.style.top = `${trailingY}px`;

    requestAnimationFrame(animateOuterCursor);
}
animateOuterCursor();

// outer cursor expands when clicked
document.addEventListener("click", (e) => {
    cursorOuter.classList.add("expand");
    setTimeout(() => {
        cursorOuter.classList.remove("expand");
    }, 500);
});
