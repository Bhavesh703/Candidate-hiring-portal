const slider = document.querySelector(".testimonial-slider");

    // Clone the slider items and append them to the end of the slider
    const sliderItems = slider.children;
    for (const item of sliderItems) {
      slider.appendChild(item.cloneNode(true));
    }

    // Optional: To stop the animation when the user hovers over the slider
    slider.addEventListener("mouseenter", () => {
      slider.style.animationPlayState = "paused";
    });

    slider.addEventListener("mouseleave", () => {
      slider.style.animationPlayState = "running";
    });