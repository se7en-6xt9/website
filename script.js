const layers = document.querySelectorAll(".layer");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        const moveX = (x * speed) / 100;
        const moveY = (y * speed) / 100;

        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});