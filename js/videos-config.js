// YouTube Video Configuration for Girişim Makina
// Video IDs and metadata organized by product category

const videoConfig = {
    // Wafer Production Lines
    wafer: [
        { id: 'igEIPiJt3UI', title: 'The Science of Wafers: How Wafers are Made', titleTR: 'Wafer Üretim Hattı' },
        { id: 'ilbFvYAV-N0', title: 'Wafer Production Lines - FOTEG 2023 Exhibition', titleTR: 'Wafer Hatları - FOTEG 2023' },
        { id: '03u4_rZC1nA', title: 'IBA 2023 Exhibition - Wafer Production Lines', titleTR: 'IBA 2023 - Wafer Hatları' },
        { id: 'Cq0ucra_twg', title: 'Wafer Lines & Packaging Machines - IBAKTECH', titleTR: 'IBAKTECH - Wafer Hatları' },
        { id: 'SIbwLTlrqTE', title: 'Powdered Sugar Grinding Mill - Wafer Line', titleTR: 'Pudra Şekeri Değirmeni' }
    ],

    // Cereal Bar / Protein Bar Production
    cerealBar: [
        { id: 'x2IZbYuavgY', title: 'Nougat Bar Production Line - Chocolate Enrobing', titleTR: 'Nuga Bar Üretim Hattı' },
        { id: 'PadWvj8-jcc', title: 'Coconut Bar Production Line - Coco Press', titleTR: 'Hindistancevizi Bar Hattı' }
    ],

    // Chocolate Coating / Enrobing
    chocolateCoating: [
        { id: 'x2IZbYuavgY', title: 'Chocolate Enrobing Machine - Nougat Production', titleTR: 'Çikolata Kaplama Makinesi' },
        { id: 'PadWvj8-jcc', title: 'Chocolate Enrober - Coconut Bar Line', titleTR: 'Çikolata Enrober' },
        { id: 'CasFkGUJMao', title: 'Chocolate Paste Filling Machine', titleTR: 'Çikolata Dolum Makinesi' },
        { id: 'cvovjcUqaU8', title: 'Double Colour Chocolate Spread Filling', titleTR: 'Çift Renkli Çikolata Dolum' }
    ],

    // Flow Pack Machines
    flowPack: [
        { id: 'tF6KbrRx9gI', title: 'Horizontal Flowpack Machine for Biscuits', titleTR: 'Bisküvi Flow Pack Makinesi' },
        { id: '8YMvvtf7pac', title: 'Chocolate Bar Packaging - Flowpack', titleTR: 'Çikolata Bar Paketleme' },
        { id: 'SjtQGO3k9CY', title: 'Bread Packaging Machine - Flow Pack', titleTR: 'Ekmek Paketleme Makinesi' },
        { id: 'anzmCrgT1kY', title: 'Ice Cream Packaging - Horizontal Flow Pack', titleTR: 'Dondurma Paketleme' },
        { id: 'KfmMarRSl90', title: 'Revolutionary Biscuit Packaging Machine', titleTR: 'Bisküvi Paketleme Makinesi' },
        { id: 'Vr_1MJsWsPs', title: 'Chicken Packaging - Box Motion Flow Wrapper', titleTR: 'Tavuk Paketleme Makinesi' }
    ],

    // Overwrapping / Rice Cake
    overwrapping: [
        { id: 'RdnibYpZZG4', title: 'The Ingenious Machines Behind Rice Cake Packaging', titleTR: 'Pirinç Keki Paketleme' },
        { id: '3VxNVW-oDeg', title: 'Automatic Rice Cake Packaging Machine', titleTR: 'Otomatik Pirinç Keki Paketleme' },
        { id: 'tRyXUPdj7jY', title: 'Rice Cake Packaging with Auto Feeding', titleTR: 'Otomatik Besleme Sistemli Paketleme' }
    ],

    // VFFS / Vertical Packaging
    vffs: [
        { id: 'GlzQlLBKF-U', title: 'Multihead Weigher VFFS for Chips', titleTR: 'Cips VFFS Paketleme' },
        { id: '_I4TDHGX-zE', title: '4-Lane Stick Pack Coffee Machine', titleTR: '4 Şeritli Kahve Paketleme' },
        { id: '90eDjQN_H28', title: 'Carousel Type Packaging for Sugar/Rice', titleTR: 'Şeker/Pirinç Carousel Paketleme' }
    ],

    // Biscuit / Cookie Production
    biscuitSandwiching: [
        { id: 'gfMiy8vIisY', title: 'Cookie Production Line - Biscuit Production', titleTR: 'Bisküvi Üretim Hattı' }
    ],

    // Thermoform (generic packaging shown)
    thermoform: [
        { id: 'mwbvdvsITRA', title: 'Ready Cups Rotary System Cheese Packaging', titleTR: 'Peynir Paketleme Sistemi' }
    ],

    // Halvah / Other
    halvah: [
        { id: '71CGtazjx8Q', title: 'Automatic Briquette Packing - Carousel Brick Bag', titleTR: 'Briket Paketleme Makinesi' }
    ],

    // Filling Machines
    filling: [
        { id: 'gG9eqMyKt0M', title: 'Honey Spoon Packing Machine', titleTR: 'Bal Kaşık Paketleme' },
        { id: 'i9CditEBPkM', title: 'Honey Filling and Capping Machine', titleTR: 'Bal Dolum ve Kapaklama' },
        { id: 'HXFzzeVjUGM', title: 'Manual Filling Machine', titleTR: 'Manuel Dolum Makinesi' },
        { id: 'CasFkGUJMao', title: 'Chocolate Paste Filling Machine', titleTR: 'Çikolata Dolum Makinesi' }
    ],

    // Labeling & Cartoning
    labeling: [
        { id: 'Lm5I5QBagCA', title: 'Self Adhesive Labeling Machine', titleTR: 'Etiketleme Makinesi' },
        { id: 'mZHGt9R494E', title: 'Cartoning Machine - How it Works', titleTR: 'Kartonlama Makinesi' }
    ],

    // Featured / General
    featured: [
        { id: 'gRQjpwNZLHU', title: 'The Future of Food Packaging - Mobile Jaw Machine', titleTR: 'Gıda Paketlemenin Geleceği' },
        { id: 'igEIPiJt3UI', title: 'The Science of Wafers', titleTR: 'Wafer Üretim Hattı' },
        { id: 'tF6KbrRx9gI', title: 'Horizontal Flowpack Machine', titleTR: 'Flow Pack Makinesi' },
        { id: 'x2IZbYuavgY', title: 'Chocolate Enrobing Machine', titleTR: 'Çikolata Kaplama' },
        { id: 'RdnibYpZZG4', title: 'Rice Cake Packaging', titleTR: 'Pirinç Keki Paketleme' },
        { id: 'GlzQlLBKF-U', title: 'VFFS Vertical Packaging', titleTR: 'Dikey Dolum Makinesi' }
    ]
};

// Helper function to get video thumbnail URL
function getVideoThumbnail(videoId, quality = 'maxresdefault') {
    // quality options: default, mqdefault, hqdefault, sddefault, maxresdefault
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

// Helper function to get embed URL
function getVideoEmbedUrl(videoId, autoplay = false) {
    return `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1&rel=0' : '?rel=0'}`;
}

// Helper function to get watch URL
function getVideoWatchUrl(videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
}

// Get videos by category
function getVideosByCategory(category) {
    return videoConfig[category] || [];
}

// Get featured video for a product
function getFeaturedVideo(category) {
    const videos = videoConfig[category];
    return videos && videos.length > 0 ? videos[0] : null;
}

// Export for use in other scripts
window.girisimVideos = {
    config: videoConfig,
    getThumbnail: getVideoThumbnail,
    getEmbedUrl: getVideoEmbedUrl,
    getWatchUrl: getVideoWatchUrl,
    getByCategory: getVideosByCategory,
    getFeatured: getFeaturedVideo
};
