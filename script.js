document.addEventListener('DOMContentLoaded', function() {
    // 漢堡選單功能
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // 關閉移動端選單
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // 滾動時改變導航欄樣式
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 內容加載功能
    const contentSections = {
        'history': '宮廟歷史內容...',
        'main-deity': '主祀神尊內容...',
        'deities': '神祇介紹內容...',
        'worship': '參拜流程內容...',
        'events': '活動資訊內容...',
        'gallery': '活動花絮內容...',
        'blessing': '祈福法會內容...',
        'six-lights': '六燈介紹內容...',
        'other-services': '其他服務內容...',
        'artifacts': '文物介紹內容...',
        'classroom': '教室預約內容...',
        'contact-info': '聯絡方式內容...',
        'traffic': '交通資訊內容...'
    };

    // 監聽子選單點擊事件
    document.querySelectorAll('.submenu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const contentDiv = this.closest('.section').querySelector('.content');
            
            if (contentSections[sectionId]) {
                contentDiv.innerHTML = contentSections[sectionId];
                contentDiv.style.display = 'block';
            }
        });
    });

    // 檢測設備類型
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // 根據設備類型調整導航欄
    function adjustNavigation() {
        if (isMobile()) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    }

    // 監聽視窗大小變化
    window.addEventListener('resize', adjustNavigation);
    adjustNavigation();
}); 