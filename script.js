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
            navbar.style.backgroundColor = '#d63e37';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = '#d63e37';
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
            <div class="blessing-container" style="margin-top: 30px;">
                <h2>祈福法會｜每月定期舉辦，助您消災解厄、福運臨門</h2>
                <div class="blessing-content" style="display: flex; align-items: flex-start; gap: 20px;">
                    <div class="blessing-text" style="text-align: left; flex: 1;">
                        <p>
                            本宮長年舉辦各類 <strong>祈福法會</strong>，由資深法師依傳統科儀誦經禮拜，為信眾祈求身體健康、家庭平安、事業順利，亦能解冤釋結、轉運開運。
                        </p>
                        <ul style="list-style-type: none; padding-left: 0;">
                            <li><strong>舉辦時間：</strong>每月農曆初二與十六</li>
                            <li><strong>地點：</strong>醒心宮</li>
                            <li><strong>報名方式：</strong>親洽或來電</li>
                        </ul>
                        <p>
                            <strong>適合對象：</strong><br />
                            ‧ 最近運勢低迷，想要補運開運者<br />
                            ‧ 家中成員身體欠安者<br />
                            ‧ 預計搬家、開業、考試者<br />
                            ‧ 希望解冤釋結、改善人際關係者
                        </p>
                        <div class="blessing-buttons">
                            <a href="https://service.ss-temple.org.tw/donate/PRAY_1.aspx" class="signup-btn" target="_blank">我要報名</a>
                            <a href="https://service.ss-temple.org.tw/donate/ADDITEM.aspx" class="edit-btn" target="_blank">我要增修</a>
                        </div>
                    </div>
                    <div class="blessing-image" style="width: 440px; flex-shrink: 0; margin-top: 30px;">
                        <div class="slideshow-container" style="height: 330px;">
                            <img src="images/blessing1.jpg" alt="醒心宮祈福法會，道長誦經為信眾祈福，現場莊嚴隆重" class="slide active" onerror="this.src='images/placeholder.jpg'" style="width: 100%; height: 100%; object-fit: cover;">
                            <img src="images/blessing2.jpg" alt="醒心宮祈福法會，信眾虔誠參拜祈福" class="slide" onerror="this.src='images/placeholder.jpg'" style="width: 100%; height: 100%; object-fit: cover;">
                            <img src="images/blessing3.jpg" alt="醒心宮祈福法會，莊嚴隆重的法會現場" class="slide" onerror="this.src='images/placeholder.jpg'" style="width: 100%; height: 100%; object-fit: cover;">
                            <div class="slideshow-dots" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px;">
                                <span class="dot active" style="width: 8px; height: 8px; background-color: #fff; border-radius: 50%; cursor: pointer;"></span>
                                <span class="dot" style="width: 8px; height: 8px; background-color: #fff; border-radius: 50%; cursor: pointer;"></span>
                                <span class="dot" style="width: 8px; height: 8px; background-color: #fff; border-radius: 50%; cursor: pointer;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // 圖片輪播功能
    function initSlideshow() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // 點擊指示點切換圖片
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // 每10秒切換一次圖片
        setInterval(nextSlide, 10000);
    }

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
                
                // 如果是祈福法會區塊，初始化輪播功能
                if (sectionId === 'blessing') {
                    initSlideshow();
                }
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