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
        'six-lights': `
            <div class="six-lights-container">
                <div class="light-item">
                    <img src="./images/light1.jpg" alt="光明燈" onerror="this.src='images/light1.jpg'">
                    <h3>光明燈</h3>
                    <p>點亮光明，照亮前程</p>
                    <a href="https://forms.gle/您的表單網址" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light2.jpg" alt="平安燈" onerror="this.src='images/light2.jpg'">
                    <h3>平安燈</h3>
                    <p>祈求平安，福氣滿門</p>
                    <a href="https://forms.gle/您的表單網址" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light3.jpg" alt="財利燈" onerror="this.src='images/light3.jpg'">
                    <h3>財利燈</h3>
                    <p>招財進寶，財運亨通</p>
                    <a href="https://forms.gle/您的表單網址" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light4.jpg" alt="文昌燈" onerror="this.src='images/light4.jpg'">
                    <h3>文昌燈</h3>
                    <p>智慧增長，學業進步</p>
                    <a href="https://forms.gle/您的表單網址" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light5.jpg" alt="姻緣燈" onerror="this.src='images/light5.jpg'">
                    <h3>姻緣燈</h3>
                    <p>良緣天定，姻緣美滿</p>
                    <a href="https://forms.gle/您的表單網址" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light6.jpg" alt="太歲燈" onerror="this.src='images/light6.jpg'">
                    <h3>太歲燈</h3>
                    <p>化解太歲，趨吉避凶</p>
                    <a href="https://forms.gle/您的表單網址" class="signup-btn" target="_blank">立即報名</a>
                </div>
            </div>
        `,
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
                console.log('Loading content for:', sectionId);
            }
        });
    });

    // 初始載入六燈介紹內容
    const sixLightsLink = document.querySelector('a[href="#six-lights"]');
    if (sixLightsLink) {
        sixLightsLink.addEventListener('click', function(e) {
            e.preventDefault();
            const contentDiv = document.querySelector('#services .content');
            if (contentDiv && contentSections['six-lights']) {
                contentDiv.innerHTML = contentSections['six-lights'];
                contentDiv.style.display = 'block';
                console.log('Loading six-lights content');
            }
        });
    }

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