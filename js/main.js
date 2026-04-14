gsap.from(".hero__title", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
});

gsap.from(".hero__subtitle", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
});

gsap.from(".hero__btn", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.9,
});

gsap.from(".navbar", {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 0.1,
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar__links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});