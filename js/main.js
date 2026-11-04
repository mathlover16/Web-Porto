$(document).ready(function() {

  const translations = {
    en: {
      "page.title": "Prayuda Zaky Al Mahdi | Portfolio",
      "language.group": "Select language",
      "nav.home": "home",
      "nav.resume": "resume",
      "nav.services": "services",
      "nav.skills": "skills",
      "nav.projects": "projects",
      "nav.contact": "contact",
      "nav.homeTitle": "Home",
      "nav.about": "About",
      "nav.resumeTitle": "Resume",
      "nav.servicesTitle": "Services",
      "nav.skillsTitle": "Skills",
      "nav.projectsTitle": "Projects",
      "nav.testimonials": "Testimonials",
      "nav.contactTitle": "Contact",
      "profile.alt": "Profile photo",
      "profile.role": "Web Database & Information System",
      "profile.connect": "Let's Connect on Social Media",
      "hero.portfolio": "Portfolio",
      "hero.website": "Website",
      "hero.design": "Design",
      "hero.intro": "A digital web database and information systems professional based in Indonesia. I also study environmental science and apply it to my in-depth work.",
      "hero.work": "Let's Work Together",
      "hero.download": "Download CV",
      "about.badge": "ABOUT",
      "about.title": "My Journey & Vision",
      "about.first": "Hi, I’m Prayuda Zaky Al Mahdi—a digital designer and developer. I am interested in web-based information systems and databases, and I would like to further develop my skills in both areas.",
      "about.second": "I have also been given the opportunity to learn about subjects related to environmental science, and I would like to integrate what I have learned with the opportunity I have now. I hope to be able to develop myself in both areas.",
      "resume.badge": "RESUME",
      "resume.experience": "Experience",
      "resume.projects": "And Projects",
      "job.environment": "Information System and Database B3 Staff",
      "job.mobile": "Mobile Practicum Assistant",
      "job.algorithm": "Algorithm and Programming Practicum Assistant",
      "job.it": "IT Staff",
      "job.graphics": "Computer Graphics Practicum Assistant",
      "job.systems": "Computer Systems Practicum Assistant",
      "job.multimedia": "Multimedia and Game Practicum Assistant",
      "date.environment": "September 2026 – present",
      "date.2025": "September 2025 – December 2025",
      "date.june2025": "June 2025 – August 2025",
      "date.february2025": "February 2025 – June 2025",
      "date.2024": "August 2024 – December 2024",
      "date.august2024": "August 2024 – December 2025",
      "services.badge": "SERVICES",
      "services.title1": "Solutions That",
      "services.title2": "Empower Your Brand",
      "service.web": "Web Design & Development",
      "service.webDescription": "Custom website design and development solutions tailored to your business needs. From responsive layouts to interactive features.",
      "service.uiux": "UI/UX Design",
      "service.uiuxDescription": "User-centered design approach focusing on creating intuitive and engaging user experiences across all digital platforms.",
      "service.branding": "Branding & Identity",
      "service.brandingDescription": "Complete brand identity development including logo design, brand guidelines, and visual identity systems.",
      "service.wordpress": "WordPress Solutions",
      "service.wordpressDescription": "Custom WordPress themes, plugins, and full website solutions with content management capabilities.",
      "service.seo": "SEO & Performance Optimization",
      "service.seoDescription": "Search engine optimization and website performance optimization to improve visibility and user experience.",
      "skills.badge": "SKILLS",
      "skills.title1": "My ",
      "skills.title2": "Superpowers",
      "projects.badge": "PROJECTS",
      "projects.title": "Gallery",
      "projects.imageAlt": "Ministry of Trade database project",
      "projects.name": "Ministry of Trade's Database",
      "contact.badge": "CONTACT",
      "contact.title": "Let's Connect Together",
      "form.name": "NAME",
      "form.namePlaceholder": "Your Name",
      "form.email": "EMAIL",
      "form.emailPlaceholder": "Your Email",
      "form.website": "WEBSITE (OPTIONAL)",
      "form.websitePlaceholder": "Company Website",
      "form.message": "MESSAGE",
      "form.messagePlaceholder": "Your Message",
      "form.submit": "Send It!",
      "form.note": "Messages are sent to my email. The first submission requires confirmation through FormSubmit.",
      "menu.title": "Menu"
    },
    id: {
      "page.title": "Prayuda Zaky Al Mahdi | Portofolio",
      "language.group": "Pilih bahasa",
      "nav.home": "beranda",
      "nav.resume": "pengalaman",
      "nav.services": "layanan",
      "nav.skills": "keahlian",
      "nav.projects": "proyek",
      "nav.contact": "kontak",
      "nav.homeTitle": "Beranda",
      "nav.about": "Tentang",
      "nav.resumeTitle": "Pengalaman",
      "nav.servicesTitle": "Layanan",
      "nav.skillsTitle": "Keahlian",
      "nav.projectsTitle": "Proyek",
      "nav.testimonials": "Testimoni",
      "nav.contactTitle": "Kontak",
      "profile.alt": "Foto profil",
      "profile.role": "Sistem Informasi & Basis Data Web",
      "profile.connect": "Mari Terhubung di Media Sosial",
      "hero.portfolio": "Portofolio",
      "hero.website": "Situs Web",
      "hero.design": "Desain",
      "hero.intro": "Profesional sistem informasi dan basis data web yang berdomisili di Indonesia. Saya juga mempelajari ilmu lingkungan dan menerapkannya dalam pekerjaan saya.",
      "hero.work": "Mari Bekerja Sama",
      "hero.download": "Unduh CV",
      "about.badge": "TENTANG",
      "about.title": "Perjalanan & Visi Saya",
      "about.first": "Halo, saya Prayuda Zaky Al Mahdi—seorang desainer dan pengembang digital. Saya tertarik pada sistem informasi berbasis web dan basis data, serta ingin terus mengembangkan kemampuan di kedua bidang tersebut.",
      "about.second": "Saya juga mendapat kesempatan untuk mempelajari berbagai hal terkait ilmu lingkungan dan ingin mengintegrasikan ilmu tersebut dengan kesempatan yang saya miliki saat ini. Saya berharap dapat terus mengembangkan diri di kedua bidang tersebut.",
      "resume.badge": "PENGALAMAN",
      "resume.experience": "Pengalaman",
      "resume.projects": "dan Proyek",
      "job.environment": "Staf Sistem Informasi dan Basis Data B3",
      "job.mobile": "Asisten Praktikum Pemrograman Mobile",
      "job.algorithm": "Asisten Praktikum Algoritma dan Pemrograman",
      "job.it": "Staf Teknologi Informasi",
      "job.graphics": "Asisten Praktikum Grafika Komputer",
      "job.systems": "Asisten Praktikum Sistem Komputer",
      "job.multimedia": "Asisten Praktikum Multimedia dan Gim",
      "date.environment": "September 2026 – sekarang",
      "date.2025": "September 2025 – Desember 2025",
      "date.june2025": "Juni 2025 – Agustus 2025",
      "date.february2025": "Februari 2025 – Juni 2025",
      "date.2024": "Agustus 2024 – Desember 2024",
      "date.august2024": "Agustus 2024 – Desember 2025",
      "services.badge": "LAYANAN",
      "services.title1": "Solusi untuk",
      "services.title2": "Mengembangkan Merek Anda",
      "service.web": "Desain & Pengembangan Web",
      "service.webDescription": "Solusi desain dan pengembangan situs web yang disesuaikan dengan kebutuhan bisnis Anda, mulai dari tata letak responsif hingga fitur interaktif.",
      "service.uiux": "Desain UI/UX",
      "service.uiuxDescription": "Pendekatan desain yang berpusat pada pengguna untuk menciptakan pengalaman yang intuitif dan menarik di berbagai platform digital.",
      "service.branding": "Pencitraan & Identitas Merek",
      "service.brandingDescription": "Pengembangan identitas merek yang menyeluruh, termasuk desain logo, panduan merek, dan sistem identitas visual.",
      "service.wordpress": "Solusi WordPress",
      "service.wordpressDescription": "Tema dan plugin WordPress khusus serta solusi situs web lengkap dengan kemampuan pengelolaan konten.",
      "service.seo": "Optimasi SEO & Performa",
      "service.seoDescription": "Optimasi mesin pencari dan performa situs web untuk meningkatkan visibilitas serta pengalaman pengguna.",
      "skills.badge": "KEAHLIAN",
      "skills.title1": "Keahlian ",
      "skills.title2": "Andalan Saya",
      "projects.badge": "PROYEK",
      "projects.title": "Galeri",
      "projects.imageAlt": "Proyek basis data Kementerian Perdagangan",
      "projects.name": "Basis Data Kementerian Perdagangan",
      "contact.badge": "KONTAK",
      "contact.title": "Mari Terhubung",
      "form.name": "NAMA",
      "form.namePlaceholder": "Nama Anda",
      "form.email": "EMAIL",
      "form.emailPlaceholder": "Email Anda",
      "form.website": "SITUS WEB (OPSIONAL)",
      "form.websitePlaceholder": "Situs Web Perusahaan",
      "form.message": "PESAN",
      "form.messagePlaceholder": "Pesan Anda",
      "form.submit": "Kirim",
      "form.note": "Pesan akan dikirim ke email saya. Pengiriman pertama memerlukan konfirmasi melalui FormSubmit.",
      "menu.title": "Menu"
    }
  };

  function setLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const dictionary = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    document.querySelectorAll("[data-i18n]").forEach(function(element) {
      element.textContent = dictionary[element.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {
      element.placeholder = dictionary[element.dataset.i18nPlaceholder];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function(element) {
      element.alt = dictionary[element.dataset.i18nAlt];
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function(element) {
      element.setAttribute("aria-label", dictionary[element.dataset.i18nAriaLabel]);
    });
    document.querySelectorAll(".language-option").forEach(function(button) {
      const isActive = button.dataset.language === selectedLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("portfolio-language", selectedLanguage);
  }

  const savedLanguage = localStorage.getItem("portfolio-language") || "en";
  setLanguage(savedLanguage);
  $(".language-option").on("click", function() {
    setLanguage(this.dataset.language);
  });

  function splitText(){
 
  
    splitLines = new SplitText(".text-anime", {
      type: "lines",
      linesClass: "text-lines"
    });
  
  
    
  
    $(".text-anime .text-lines").wrap('<div class="line-wrapper">');
  
  }
  
  splitText();

        const ua = navigator.userAgent;
    
        // Only Safari (macOS or iOS Safari)
        const isSafari =
          /^((?!chrome|android).)*safari/i.test(ua);
    
        if (isSafari) {
          document.documentElement.classList.add("safari-browser");
        }


    // ACCORDION
    $('.accordion-header').on('click', function(){
      

        $(this).toggleClass('active');
        $(this).next('.accordion-content').slideToggle();

        $('.accordion-header').not($(this)).removeClass('active');
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });


    if($('commentSlider').length){
      var swiper = new Swiper(".commentSlider", {
        slidesPerView: 2.8,
        spaceBetween: 30,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        speed: 10000,
        loop: true,
      
        breakpoints: {
          0: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.8
          }
        }
      });
    }

    if( $('.lightbox').length ){

      $('.lightbox img').magnificPopup({
            type:'image',
            closeOnContentClick: true,
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 300}
        });
        
    }

    const sidebar = gsap.timeline({yoyo: false,reversed: true});
    sidebar.pause();

      sidebar.to(".sidebar", {
        autoAlpha: 1,
        'pointer-events': 'all',
        duration: .3
      })
      .to(".sidebar .right-bar", {
        x: 0,
        duration: .3
      });

    $('.hamburger').on('click', function(){
        sidebar.reversed() ? sidebar.play(): sidebar.reverse();
    });

    
    $('.sidebar').on('click', function(){
      sidebar.reversed() ? sidebar.play(): sidebar.reverse();
  });


  //SCROLL trigger

  $('.text-anime').each(function(){
    gsap.to( $(this).find('.text-lines'),{ 
      y: 0,
      stagger:.1,
      delay : $(this).data('delay') ? $(this).data('delay') : 0,
      duration:1.1,
        scrollTrigger: {
          trigger: $(this),
          start: "top bottom-=20%",
          end: "center 100px",
          }
    });
  });

  $('.fade-up-anime').each(function(){
    gsap.to( $(this),{ 
      y: 0,
      autoAlpha:1,
      stagger:.1,
      duration:1.1,
        scrollTrigger: {
          trigger: $(this),
          start: "top bottom-=20%",
          end: "center 100px",
          }
    });
  });
  
  $(window).on("scroll", function () {
    let scrollPos = $(window).scrollTop();
    let offset = 150;
  
    $("section").each(function () {
      let top = $(this).offset().top - offset;
      let bottom = top + $(this).outerHeight();
      let id = $(this).attr("id");
  
      if (scrollPos >= top && scrollPos < bottom) {
        $(".icon-bar a.active, .sidebar a.active").removeClass("active");
        $('.icon-bar a[href="#' + id + '"], .sidebar a[href="#' + id + '"]').addClass("active");
        return false; // loop break
      }
    });
  });

});



