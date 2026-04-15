gsap.from(".hero__title", { duration: 1, y: 50, opacity: 0, delay: 0.3 });
gsap.from(".hero__subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.6 });
gsap.from(".hero__btn", { duration: 1, y: 50, opacity: 0, delay: 0.9 });
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, delay: 0.1 });

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
const productsGrid = document.querySelector('.products__grid');

productsToggle.addEventListener('click', () => {
    const expanded = productsGrid.classList.toggle('expanded');
    productsToggle.textContent = expanded ? 'Vis færre' : 'Se alle produkter';
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
