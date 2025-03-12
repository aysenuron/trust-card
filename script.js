document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");

    let isFlipped = false;

    card.addEventListener("click", () => {
        isFlipped = !isFlipped;
        gsap.to(card, { 
            rotateY: isFlipped ? 180 : 0, 
            duration: 1.2, 
            ease: "elastic.out(1, 0.8)" // Bouncy easing with defined strength
        });
    });
});
