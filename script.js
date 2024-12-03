document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.header-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (scrollY >= sectionTop - windowHeight / 2)
                current = section.getAttribute('id');

            if (scrollY < windowHeight / 2)
                current = 'home';

        });

        links.forEach(link => {
            link.classList.remove('text-brown-light');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-brown-light');
            }
        });
    });
});