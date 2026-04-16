gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero__title", { duration: 1, y: 50, opacity: 0, delay: 0.3 });
gsap.from(".hero__subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.6 });
gsap.from(".hero__btn", { duration: 1, y: 50, opacity: 0, delay: 0.9 });
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, delay: 0.1 });

// Products section
gsap.from(".products__title", {
    scrollTrigger: { trigger: ".products__title", start: "top 85%" },
    duration: 0.8, y: 40, opacity: 0, ease: "power2.out"
});
gsap.from(".products__card", {
    scrollTrigger: { trigger: ".products__grid", start: "top 85%" },
    duration: 0.6, y: 50, opacity: 0, ease: "power2.out",
    stagger: 0.1
});

// Features section
gsap.from(".features__item", {
    scrollTrigger: { trigger: ".features", start: "top 85%" },
    duration: 0.7, y: 40, opacity: 0, ease: "power2.out",
    stagger: 0.15
});

// About section
gsap.from(".about__title", {
    scrollTrigger: { trigger: ".about__title", start: "top 85%" },
    duration: 0.8, y: 40, opacity: 0, ease: "power2.out"
});
document.querySelectorAll(".about__story").forEach((story, i) => {
    const img = story.querySelector(".about__image");
    const txt = story.querySelector(".about__text");
    const fromLeft = i % 2 === 0;
    gsap.from(img, {
        scrollTrigger: { trigger: story, start: "top 85%" },
        duration: 0.9, x: fromLeft ? -50 : 50, opacity: 0, ease: "power2.out"
    });
    gsap.from(txt, {
        scrollTrigger: { trigger: story, start: "top 85%" },
        duration: 0.9, x: fromLeft ? 50 : -50, opacity: 0, ease: "power2.out", delay: 0.15
    });
});

// Contact section
gsap.from(".contact__map", {
    scrollTrigger: { trigger: ".contact", start: "top 85%" },
    duration: 0.9, x: -50, opacity: 0, ease: "power2.out"
});
gsap.from(".contact__info", {
    scrollTrigger: { trigger: ".contact", start: "top 85%" },
    duration: 0.9, x: 50, opacity: 0, ease: "power2.out", delay: 0.15
});

// Hamburger menu
const hamburger = document.querySelector('.navbar__humburger');
const navMenu = document.querySelector('.navbar__links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
    });
});

// Products show more / less
const productsToggle = document.getElementById('products-toggle');
const extraCards = document.querySelectorAll('.products__card--extra');
let isExpanded = false;

productsToggle.addEventListener('click', () => {
    if (!isExpanded) {
        isExpanded = true;
        productsToggle.textContent = 'Vis færre';
        extraCards.forEach(card => {
            card.style.display = 'block';
            gsap.set(card, { opacity: 0, y: 40 });
        });
        gsap.to([...extraCards], {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1
        });
    } else {
        isExpanded = false;
        productsToggle.textContent = 'Se alle produkter';
        gsap.to([...extraCards], {
            opacity: 0, y: 20, duration: 0.35, ease: 'power2.in', stagger: 0.05,
            onComplete: () => extraCards.forEach(card => card.style.display = 'none')
        });
        document.getElementById('produkter').scrollIntoView({ behavior: 'smooth' });
    }
});

// Ingredients toggle
document.querySelectorAll('.products__ing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const ing = btn.nextElementSibling;
        ing.classList.toggle('open');
        btn.classList.toggle('open');
    });
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
