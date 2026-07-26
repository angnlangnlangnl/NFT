// ==================== 图片配置文件 ====================
// 修改此文件即可统一更新所有页面的图片路径

const IMAGES = {
    // 背景图
    background: 'images/background.png',
    
    // Logo图标
    logo: 'images/logo.png',
    
    // 盲盒图标
    blindbox: 'images/blindbox.png',
    
    // 导航栏图标
    navNFT: 'images/nav-nft.png',
    navEntertainment: 'images/nav-entertainment.png',
    navMarket: 'images/nav-market.png',
    navCollection: 'images/nav-collection.png',
    navEcosystem: 'images/nav-ecosystem.png',
    
    // 盲盒卡片封面
    cardCover: 'images/card-cover.png',
    
    // 动物图片
    animals: {
        snowLeopard: 'images/animals/snow-leopard.png',
        panda: 'images/animals/panda.png',
        rhino: 'images/animals/rhino.png',
        eagle: 'images/animals/eagle.png',
        elephant: 'images/animals/elephant.png',
        tiger: 'images/animals/tiger.png',
        fox: 'images/animals/fox.png',
        peacock: 'images/animals/peacock.png',
        dolphin: 'images/animals/dolphin.png'
    },
    
    // 稀有度图标
    rarity: {
        legendary: 'images/rarity-legendary.png',
        epic: 'images/rarity-epic.png',
        rare: 'images/rarity-rare.png',
        common: 'images/rarity-common.png'
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IMAGES;
}
