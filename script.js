const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
});

const cards = document.querySelectorAll(".step-card");
const firstCard = document.querySelector(".step-card.default-active");



function resetToDefault() {
    cards.forEach((c) => c.classList.remove("active"));
    firstCard.classList.add("default-active");
}

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        if (window.innerWidth > 900) {
            cards.forEach((c) =>
                c.classList.remove("active", "default-active")
            );
            card.classList.add("active");
        }
    });

    card.addEventListener("mouseleave", () => {
        if (window.innerWidth > 900) {
            resetToDefault();
        }
    });
});

cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            cards.forEach((c) =>
                c.classList.remove("active", "default-active")
            );
            card.classList.add("active");
        }
    });
});
