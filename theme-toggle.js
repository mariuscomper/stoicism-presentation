(function () {
    'use strict';

    const root = document.documentElement;
    const button = document.getElementById('themeToggle');
    if (!button) return;

    const key = button.dataset.themeStorage || 'site-theme';
    const stored = (() => {
        try { return localStorage.getItem(key); } catch (error) { return null; }
    })();
    const initial = stored === 'dark' || stored === 'light'
        ? stored
        : (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    function apply(theme) {
        const dark = theme === 'dark';
        root.dataset.theme = theme;
        button.textContent = dark ? 'Light theme' : 'Dark theme';
        button.setAttribute('aria-pressed', String(dark));
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = dark ? '#1a1a1a' : '#f1ede5';
    }

    apply(initial);
    button.addEventListener('click', function () {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        apply(next);
        try { localStorage.setItem(key, next); } catch (error) { /* private browsing */ }
    });
}());
