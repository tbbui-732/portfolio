const outerRing = document.querySelector('.outer-ring');

// outer ring moves with mouse
document.addEventListener('mousemove', e => {
    outerRing.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

// outer ring expands when clicked
document.addEventListener('click', () => {
    outerRing.classList.add("expand");
    setTimeout(() => {
        outerRing.classList.remove("expand");
    }, 500);
});

