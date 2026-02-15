// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
    } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
    }
}

// Check local storage or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'light') {
    setTheme('light');
} else {
    setTheme('dark');
}

// Toggle Event Listener
themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

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
