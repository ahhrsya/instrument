// js/main.js
document.addEventListener('DOMContentLoaded', () => {

    /**
     * 1. Intersection Observer for Scroll Animations
     * Targets elements with .js-reveal and .js-reveal-stagger
     */
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px', // Trigger when element is 15% from bottom
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Get all elements to animate
    const revealElements = document.querySelectorAll('.js-reveal, .js-reveal-stagger');
    revealElements.forEach(el => revealObserver.observe(el));


    /**
     * 2. FAQ Accordion Logic
     */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const content = header.nextElementSibling;
            
            // Close all currently open accordions (optional: remove this if you want multiple open at once)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    const otherContent = otherHeader.nextElementSibling;
                    otherContent.classList.remove('active');
                    otherContent.style.maxHeight = null;
                }
            });

            // Toggle current accordion
            if (isExpanded) {
                header.setAttribute('aria-expanded', 'false');
                content.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
                // Set max-height for smooth transition
                content.style.maxHeight = content.scrollHeight + 40 + "px"; // 40px for padding
            }
        });
    });


    /**
     * 3. Smooth Scrolling for Anchor Links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate position taking sticky header into account
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
