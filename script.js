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
        'six-lights': `
            <div class="six-lights-container">
                <div class="light-item">
                    <img src="./images/light1.jpg" alt="光明燈" onerror="this.src='./images/placeholder.jpg'">
                    <h3>光明燈</h3>
                    <p>點亮光明燈，祈求光明前程，事業順遂。</p>
                    <a href="https://service.ss-temple.org.tw/donate/LIGHT_1.aspx" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light2.jpg" alt="平安燈" onerror="this.src='./images/placeholder.jpg'">
                    <h3>平安燈</h3>
                    <p>點亮平安燈，祈求平安健康，家庭和睦。</p>
                    <a href="https://service.ss-temple.org.tw/donate/LIGHT_1.aspx" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light3.jpg" alt="智慧燈" onerror="this.src='./images/placeholder.jpg'">
                    <h3>智慧燈</h3>
                    <p>點亮智慧燈，祈求智慧增長，學業進步。</p>
                    <a href="https://service.ss-temple.org.tw/donate/LIGHT_1.aspx" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light4.jpg" alt="財運燈" onerror="this.src='./images/placeholder.jpg'">
                    <h3>財運燈</h3>
                    <p>點亮財運燈，祈求財運亨通，生意興隆。</p>
                    <a href="https://service.ss-temple.org.tw/donate/LIGHT_1.aspx" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light5.jpg" alt="姻緣燈" onerror="this.src='./images/placeholder.jpg'">
                    <h3>姻緣燈</h3>
                    <p>點亮姻緣燈，祈求良緣天定，婚姻美滿。</p>
                    <a href="https://service.ss-temple.org.tw/donate/LIGHT_1.aspx" class="signup-btn" target="_blank">立即報名</a>
                </div>
                <div class="light-item">
                    <img src="./images/light6.jpg" alt="太歲燈" onerror="this.src='./images/placeholder.jpg'">
                    <h3>太歲燈</h3>
                    <p>點亮太歲燈，祈求化解太歲，趨吉避凶。</p>
                    <a href="https://service.ss-temple.org.tw/donate/LIGHT_1.aspx" class="signup-btn" target="_blank">立即報名</a>
                </div>
            </div>
        `,
        'blessing': `
            <div class="blessing-container">
                <h2>祈福法會</h2>
                <div class="blessing-content">
                    <p>本宮定期舉辦各類祈福法會，為信眾消災解厄、祈福納吉。</p>
                    <p>法會時間：每月農曆初二、十六</p>
                    <p>報名方式：請親洽本宮或電話預約</p>
                    <p>聯絡電話：(02) 2553-5492</p>
                </div>
            </div>
        `
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
}); 