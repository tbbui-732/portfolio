const innerDot = document.querySelector('.inner-dot');
const outerRing = document.querySelector('.outer-ring');

// cursor animation moves with mouse
document.addEventListener('mousemove', e => {
    innerDot.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;");
    outerRing.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
});

// outer ring expands when clicked
document.addEventListener('click', () => {
    outerRing.classList.add("expand");
    setTimeout(() => {
        outerRing.classList.remove("expand");
    }, 500);
});

