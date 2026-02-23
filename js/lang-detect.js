/**
 * Language Detection from URL
 * Detects language prefix from URL path (/en/, /ru/, /ar/, etc.)
 * Sets localStorage and html lang attribute immediately (before page renders)
 */
(function() {
    var supportedLangs = ['en', 'ru', 'ar', 'fr', 'pt', 'es']; // tr is default, no prefix
    var path = window.location.pathname;
    var match = path.match(/^\/(en|ru|ar|fr|pt|es)(\/|$)/);

    if (match) {
        var lang = match[1];
        localStorage.setItem('girisim_lang', lang);
        document.documentElement.lang = lang;
        // Set RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        }
        // Store the lang prefix globally for link generation
        window.__langPrefix = '/' + lang;
    } else {
        // No language prefix in URL
        // If URL is clean (no prefix), check if user had a non-TR language
        // and they navigated to a clean URL - respect the URL (treat as TR)
        var currentPath = path.replace(/^\/+/, '');
        // Only reset to TR if this is a direct navigation (not a rewrite)
        // Keep existing localStorage language if no prefix - user may have set it via switcher
        window.__langPrefix = '';

        // If URL has no lang prefix, use stored language or default to TR
        var storedLang = localStorage.getItem('girisim_lang');
        if (storedLang && supportedLangs.indexOf(storedLang) !== -1) {
            document.documentElement.lang = storedLang;
            if (storedLang === 'ar') {
                document.documentElement.dir = 'rtl';
            }
        } else {
            document.documentElement.lang = 'tr';
        }
    }

    /**
     * Get the current language prefix for building links
     * Returns '/en' or '' for Turkish
     */
    window.getLangPrefix = function() {
        var lang = localStorage.getItem('girisim_lang') || 'tr';
        if (lang === 'tr') return '';
        return '/' + lang;
    };

    /**
     * Build a localized URL
     * e.g., buildLangUrl('/products/flow-pack') → '/en/products/flow-pack'
     */
    window.buildLangUrl = function(path) {
        var prefix = window.getLangPrefix();
        // Ensure path starts with /
        if (path.charAt(0) !== '/') path = '/' + path;
        // Remove .html extension (cleanUrls is enabled)
        path = path.replace(/\.html$/, '');
        // Remove index from end
        path = path.replace(/\/index$/, '/');
        return prefix + path;
    };

    /**
     * Navigate to a different language version of current page
     */
    window.switchLangUrl = function(newLang) {
        var path = window.location.pathname;
        // Remove current language prefix if present
        path = path.replace(/^\/(en|ru|ar|fr|pt|es)(\/|$)/, '/');
        // Ensure clean path
        if (path === '') path = '/';
        // Add new language prefix (skip for TR)
        if (newLang === 'tr') {
            return path;
        }
        return '/' + newLang + (path === '/' ? '' : path);
    };
})();
