// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function updateIcons(theme) {
    const toggle = document.getElementById('theme-toggle');
    const knob   = document.getElementById('toggle-knob');
    const sun    = document.getElementById('icon-sun');
    const moon   = document.getElementById('icon-moon');
    if (toggle) toggle.style.background = (theme === 'dark') ? '#1e4a70' : '#d97706';
    if (knob)   knob.style.transform    = (theme === 'dark') ? 'translateX(0)'   : 'translateX(24px)';
    if (sun)    sun.style.display       = (theme === 'light') ? '' : 'none';
    if (moon)   moon.style.display      = (theme === 'dark')  ? '' : 'none';
}

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    updateIcons(theme);
}

// Check local storage or system preference
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'light') {
    setTheme('light');
} else {
    setTheme('dark');
}

// Toggle Event Listener
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
}

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Scroll Hint Logic
function setupScrollHint(scrollId, hintId) {
    const scrollContainer = document.getElementById(scrollId);
    const hintElement = document.getElementById(hintId);

    if (scrollContainer && hintElement) {
        scrollContainer.addEventListener('scroll', () => {
            // Check if scrolled to bottom (with buffer)
            if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 50) {
                hintElement.classList.add('opacity-0');
                hintElement.classList.remove('animate-bounce');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Hint Logic
    setupScrollHint('resume-scroll-1', 'exp-hint');
    setupScrollHint('resume-scroll-2', 'edu-hint');

    // Hero Carousel Logic
    setupHeroCarousel();

});


function setupHeroCarousel() {
    // Auto-scroll removed as per user request.
    // Standard horizontal scrolling enabled via CSS (overflow-x-auto).
}
