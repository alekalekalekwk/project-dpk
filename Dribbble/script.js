
document.addEventListener('DOMContentLoaded', function () {

    // navigasi mobile
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // toggle mobile menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        // animasi navbar burger
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    });

    // mobile menu -
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        });
    });

    // scroll smooth animation
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // bayangan scroll
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // active navbar scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // form validasi 
    const suggestionForm = document.getElementById('suggestionForm');

    suggestionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const suggestion = document.getElementById('suggestion').value.trim();

        // validasi
        if (!name || !email || !suggestion) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // simulasi form
        const submitButton = suggestionForm.querySelector('.form-submit');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // simulasi api
        setTimeout(() => {
            showMessage('Thank you! Your suggestion has been sent successfully! 🎉', 'success');
            suggestionForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });

    // email validation 
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // show message
    function showMessage(message, type) {
        // remove msg sisa
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // create message elem
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 0.5rem;
            text-align: center;
            font-weight: 600;
            animation: slideIn 0.3s ease-out;
            ${type === 'success'
                ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
                : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;

        // add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        // insert message
        suggestionForm.appendChild(messageDiv);

        // remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }

    // scroll reveal animasi
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const cards = document.querySelectorAll('.about-card, .contact-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // logo click - scroll to top
    const logo = document.querySelector('.nav-logo');
    logo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // footer tahun

    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
    }

    console.log('🎨 Portfolio website loaded successfully!');
});
