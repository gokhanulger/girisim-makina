// Category Page Loader - Dynamically loads content from siteContent.machineCategories (recursive tree)
(function() {
    var loaded = false;

    // Find a node in the tree by id (recursive)
    function findNodeById(nodes, targetId) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id === targetId) return nodes[i];
            if (nodes[i].children && nodes[i].children.length) {
                var found = findNodeById(nodes[i].children, targetId);
                if (found) return found;
            }
        }
        return null;
    }

    // Build breadcrumb path from root to target node
    function findPath(nodes, targetId, path) {
        for (var i = 0; i < nodes.length; i++) {
            var newPath = path.concat([nodes[i]]);
            if (nodes[i].id === targetId) return newPath;
            if (nodes[i].children && nodes[i].children.length) {
                var found = findPath(nodes[i].children, targetId, newPath);
                if (found) return found;
            }
        }
        return null;
    }

    function loadCategoryContent() {
        if (loaded) return;
        var content = window.__siteContent;
        if (!content || !content.machineCategories) return;

        var section = document.querySelector('.machine-category-section[data-category-id]');
        if (!section) return;

        var categoryId = section.getAttribute('data-category-id');
        var node = findNodeById(content.machineCategories, categoryId);
        if (!node || !node.children || !node.children.length) return;

        // Check if any child has admin-uploaded image
        var hasAdminContent = node.children.some(function(c) { return !!c.image; });
        if (!hasAdminContent) return; // Keep static HTML if no admin images set

        loaded = true;
        var grid = section.querySelector('.machine-cat-grid');
        if (!grid) return;

        // Build breadcrumb
        var breadcrumbContainer = section.querySelector('.category-breadcrumb');
        if (breadcrumbContainer) {
            var pathNodes = findPath(content.machineCategories, categoryId, []);
            if (pathNodes && pathNodes.length > 0) {
                var crumbs = '<a href="../index.html" data-translate="nav.home">Ana Sayfa</a>';
                for (var p = 0; p < pathNodes.length; p++) {
                    var isLast = (p === pathNodes.length - 1);
                    var pNode = pathNodes[p];
                    var translateAttr = pNode.titleKey ? ' data-translate="' + pNode.titleKey + '"' : '';
                    if (isLast) {
                        crumbs += ' <span class="breadcrumb-sep">/</span> <span class="breadcrumb-current"' + translateAttr + '>' + pNode.title + '</span>';
                    } else {
                        var pHref = pNode.href ? '../' + pNode.href : '#';
                        crumbs += ' <span class="breadcrumb-sep">/</span> <a href="' + pHref + '"' + translateAttr + '>' + pNode.title + '</a>';
                    }
                }
                breadcrumbContainer.innerHTML = crumbs;
            }
        }

        // Render children cards
        grid.innerHTML = node.children.map(function(child) {
            var imgSrc = child.image || '../images/pexels-factory-machinery.jpg';
            var translateAttr = child.titleKey ? ' data-translate="' + child.titleKey + '"' : '';
            var childHref = child.href ? '../' + child.href : '#';
            var isCategory = child.type === 'category';
            var typeIcon = isCategory ? '<span class="machine-cat-type-badge"><i class="fas fa-folder-open"></i></span>' : '';

            return '<a href="' + childHref + '" class="machine-cat-card' + (isCategory ? ' machine-cat-card--category' : '') + '">' +
                '<div class="machine-cat-img">' +
                    typeIcon +
                    '<img src="' + imgSrc + '" alt="' + child.title + '" loading="lazy">' +
                '</div>' +
                '<div class="machine-cat-info">' +
                    '<h3' + translateAttr + '>' + child.title + '</h3>' +
                    '<span class="machine-cat-btn" data-translate="common.details">' +
                        (isCategory ? 'Alt Kategoriler' : 'Detaylar') +
                        ' <i class="fas fa-arrow-right"></i>' +
                    '</span>' +
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
