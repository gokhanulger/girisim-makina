// Category Page Loader - Dynamically loads machine cards from siteContent.machineCategories
(function() {
    var loaded = false;

    function loadCategoryContent() {
        if (loaded) return;
        var content = window.__siteContent;
        if (!content || !content.machineCategories) return;

        var section = document.querySelector('.machine-category-section[data-category-id]');
        if (!section) return;

        var categoryId = section.getAttribute('data-category-id');
        var cat = null;
        for (var i = 0; i < content.machineCategories.length; i++) {
            if (content.machineCategories[i].id === categoryId) {
                cat = content.machineCategories[i];
                break;
            }
        }
        if (!cat || !cat.machines || !cat.machines.length) return;

        // Check if any machine has admin-uploaded image
        var hasAdminContent = cat.machines.some(function(m) { return !!m.image; });
        if (!hasAdminContent) return; // Keep static HTML if no admin images set

        loaded = true;
        var grid = section.querySelector('.machine-cat-grid');
        if (!grid) return;

        grid.innerHTML = cat.machines.map(function(m) {
            var imgSrc = m.image || '../images/pexels-factory-machinery.jpg';
            var translateAttr = m.titleKey ? ' data-translate="' + m.titleKey + '"' : '';
            return '<a href="../' + m.href + '" class="machine-cat-card">' +
                '<div class="machine-cat-img">' +
                    '<img src="' + imgSrc + '" alt="' + m.title + '" loading="lazy">' +
                '</div>' +
                '<div class="machine-cat-info">' +
                    '<h3' + translateAttr + '>' + m.title + '</h3>' +
                    '<span class="machine-cat-btn" data-translate="common.details">Detaylar <i class="fas fa-arrow-right"></i></span>' +
                '</div>' +
            '</a>';
        }).join('');

        // Re-apply translations if available
        if (typeof applyTranslations === 'function') {
            setTimeout(applyTranslations, 50);
        }
    }

    // Poll for siteContent (async loaded)
    var attempts = 0;
    var interval = setInterval(function() {
        attempts++;
        if (window.__siteContent || attempts > 50) {
            clearInterval(interval);
            loadCategoryContent();
        }
    }, 100);
})();
