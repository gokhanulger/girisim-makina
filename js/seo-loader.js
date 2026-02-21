/**
 * SEO Loader - Applies dynamic meta tags from Supabase admin panel
 * Runs on every page, updates title, description, keywords, OG tags
 */
(function() {
    // Determine current page ID from URL
    function getPageId() {
        const path = window.location.pathname;
        if (path === '/' || path.endsWith('/index.html') || path.endsWith('/index')) return 'homepage';

        // Product pages
        const productMatch = path.match(/products\/(?:flowpack\/)?([^/.]+)/);
        if (productMatch) return 'product-' + productMatch[1];

        // Other pages
        if (path.includes('blog')) return 'blog';
        if (path.includes('hr')) return 'hr';
        if (path.includes('packaging-by-type')) return 'packaging-by-type';
        if (path.includes('packaging-by-product')) return 'packaging-by-product';

        return 'homepage';
    }

    function applySEO(content) {
        if (!content || !content.seo) return;

        const pageId = getPageId();
        const seo = content.seo[pageId] || content.seo.homepage || {};

        if (!seo.title && !seo.description) return;

        // Update document title
        if (seo.title) {
            document.title = seo.title;
        }

        // Update or create meta description
        if (seo.description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = seo.description;
        }

        // Update or create meta keywords
        if (seo.keywords) {
            let metaKeys = document.querySelector('meta[name="keywords"]');
            if (!metaKeys) {
                metaKeys = document.createElement('meta');
                metaKeys.name = 'keywords';
                document.head.appendChild(metaKeys);
            }
            metaKeys.content = seo.keywords;
        }

        // Open Graph tags
        if (seo.title) setOGTag('og:title', seo.title);
        if (seo.description) setOGTag('og:description', seo.description);
        if (seo.ogImage) setOGTag('og:image', seo.ogImage);
        setOGTag('og:url', window.location.href);
        setOGTag('og:type', 'website');
    }

    function setOGTag(property, content) {
        let tag = document.querySelector('meta[property="' + property + '"]');
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.content = content;
    }

    // Apply SEO when content is available
    document.addEventListener('DOMContentLoaded', async function() {
        try {
            let content = window.__siteContent;
            if (!content && typeof getCachedSiteContent === 'function') {
                content = await getCachedSiteContent();
            }
            if (content) applySEO(content);
        } catch (e) {
            // SEO is non-critical, fail silently
        }
    });
})();
