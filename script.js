
/* Update the footer year automatically */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Welcome message for the developer */
console.log("Welcome to Abraham Dual's Portfolio!");

/* ===== HERO TYPING ANIMATION ===== */

const typingElement = document.getElementById("typing-text");

if (typingElement) {
    const titles = [
        "Software Engineering Student",
        "Aspiring Software Developer",
        "Web Development Learner"
    ];

    let titleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentTitle = titles[titleIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingElement.textContent =
            currentTitle.substring(0, characterIndex);

        let delay = deleting ? 45 : 90;

        if (!deleting && characterIndex === currentTitle.length) {
            deleting = true;
            delay = 1600;
        } else if (deleting && characterIndex === 0) {
            deleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            delay = 400;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
}

/* ===== SCROLL REVEAL ANIMATION ===== */

const revealSections = document.querySelectorAll(
    "#about, #skills, #projects"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealSections.forEach((section) => {
        section.classList.add("reveal");
        revealObserver.observe(section);
    });

} else {
    revealSections.forEach((section) => {
        section.classList.add("visible");
    });
}
