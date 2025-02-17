const cursorInner = document.querySelector('.cursor-inner');
const cursorOuter = document.querySelector('.cursor-outer');

let posX = 0, posY = 0; // Inner dot position
let trailingX = 0, trailingY = 0; // Outer ring position

document.addEventListener("mousemove", (e) => {
    posX = e.clientX;
    posY = e.clientY;

    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;
});

function animateOuterCursor() {
    trailingX += (posX - trailingX) * 0.1;
    trailingY += (posY - trailingY) * 0.1;

    cursorOuter.style.left = `${trailingX}px`;
    cursorOuter.style.top = `${trailingY}px`;

    requestAnimationFrame(animateOuterCursor);
}

animateOuterCursor();
