        function toggleMenu() {
            const nav = document.getElementById('nav');
            nav.classList.toggle('active');
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            const nav = document.getElementById('nav');
            nav.classList.remove('active');
            
            if (section) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = section.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        }

        document.addEventListener('click', function(event) {
            const nav = document.getElementById('nav');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const header = document.querySelector('header');
            
            if (!header.contains(event.target)) {
                nav.classList.remove('active');
            }
        });

        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0,3,48,0.15)';
            } else {
                header.style.boxShadow = '0 2px 15px rgba(0,3,48,0.1)';
            }
        });