const slider = document.querySelector(".slider");
const image = document.querySelector(".slider__image");
const bounds = image.getBoundingClientRect();

slider.addEventListener("mousemove", (e) => {
    const imageSrc = e.target.querySelector("img")?.getAttribute("data-src");

    if (imageSrc) {
        image.src = imageSrc;

        const xMovement = Math.min(Math.max(parseInt(e.movementX), -20), 20);
        const yMovement = Math.min(Math.max(parseInt(e.movementY), -20), 20);

        gsap.to(image, {
            autoAlpha: 1,
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top - bounds.height / 2,
            transformOrigin: "center",
            rotation: xMovement,
            skewX: xMovement,
            skewY: yMovement
        });
    } else {
        image.src = "";

        gsap.set(image, {
            autoAlpha: 0
        });
    }
});
