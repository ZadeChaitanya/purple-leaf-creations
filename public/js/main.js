/* =====================================================
   PURPLE LEAF CREATIONS - Main JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ===== CUSTOM SCROLL REVEAL SYSTEM =====
  // We use our own IntersectionObserver instead of AOS to guarantee it works.

  // Initialize AOS (kept for backward compatibility, but our custom system does the real work)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      disable: false,
    });
  }

  // Map data-aos values to our reveal classes
  function setupReveal() {
    const elements = document.querySelectorAll('[data-aos]');

    elements.forEach(function (el) {
      const type = el.getAttribute('data-aos');
      const delay = el.getAttribute('data-aos-delay') || 0;

      // Add our reveal class
      el.classList.add('reveal');
      el.classList.add('reveal-' + type);

      // Set delay via inline style
      if (delay && parseInt(delay) > 0) {
        el.style.transitionDelay = (parseInt(delay) / 1000) + 's';
      }
    });
  }

  setupReveal();

  // IntersectionObserver to trigger the animation
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -80px 0px', // Trigger 80px before element bottom hits viewport
    threshold: 0.1
  });

  // Observe all reveal elements
  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  // Safety net: after 4 seconds, reveal anything still hidden that's in viewport
  setTimeout(function () {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed');
      }
    });
  }, 4000);

  // ===== HERO SWIPER =====
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.hero-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.hero-nav',
      prevEl: '.swiper-button-prev.hero-nav',
    },
    on: {
      slideChangeTransitionStart: function () {
        const activeSlide = this.slides[this.activeIndex];
        const content = activeSlide.querySelector('.hero-content');
        if (content) {
          content.style.opacity = '0';
          content.style.transform = 'translateY(30px)';
        }
      },
      slideChangeTransitionEnd: function () {
        const activeSlide = this.slides[this.activeIndex];
        const content = activeSlide.querySelector('.hero-content');
        if (content) {
          content.style.transition = 'all 0.7s ease';
          content.style.opacity = '1';
          content.style.transform = 'translateY(0)';
        }
      },
    },
  });

  // ===== BEST SELLERS SWIPER =====
  new Swiper('.bestseller-swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    speed: 600,
    pagination: {
      el: '.bestseller-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      425: { slidesPerView: 1.8, spaceBetween: 16 },
      576: { slidesPerView: 2.3, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      992: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 4, spaceBetween: 24 },
    },
  });

  // ===== NEW ARRIVALS SWIPER =====
  new Swiper('.new-arrivals-swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    speed: 600,
    pagination: {
      el: '.new-arrivals-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      425: { slidesPerView: 1.8, spaceBetween: 16 },
      576: { slidesPerView: 2.3, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      992: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 4, spaceBetween: 24 },
    },
  });

  // ===== REVIEWS SWIPER =====
  new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 600,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.reviews-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: { slidesPerView: 1.5, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 24 },
    },
  });

  // ===== STICKY HEADER SHADOW ON SCROLL =====
  const header = document.getElementById('mainHeader');

  function handleHeaderScroll() {
    if (!header) return;
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ===== MOBILE MENU SUBMENU TOGGLE =====
  document.querySelectorAll('.submenu-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parentLi = this.closest('.has-submenu');
      const submenu = parentLi.querySelector('.submenu');
      const icon = this.querySelector('i');

      document.querySelectorAll('.has-submenu .submenu.open').forEach(function (openMenu) {
        if (openMenu !== submenu) {
          openMenu.classList.remove('open');
          const otherIcon = openMenu.closest('.has-submenu').querySelector('.submenu-toggle i');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      submenu.classList.toggle('open');
      icon.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
      icon.style.transition = 'transform 0.3s ease';
    });
  });

  // ===== WISHLIST TOGGLE =====
  document.querySelectorAll('.wishlist-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle('active');

      const icon = this.querySelector('i');
      if (this.classList.contains('active')) {
        icon.className = 'bi bi-heart-fill';
        this.style.transform = 'scale(1.3)';
        setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);
      } else {
        icon.className = 'bi bi-heart';
      }
    });
  });

  // ===== ADD TO CART ANIMATION =====
  document.querySelectorAll('.add-to-cart-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const originalHTML = this.innerHTML;
      this.innerHTML = '<i class="bi bi-check-lg"></i> Added!';
      this.style.background = 'linear-gradient(135deg, #28A745, #1e7e34)';

      setTimeout(() => {
        this.innerHTML = originalHTML;
        this.style.background = '';
      }, 1500);
    });
  });

  // ===== BACK TO TOP BUTTON =====
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '<i class="bi bi-chevron-up"></i>';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input[type="email"]');
      const btn = this.querySelector('button');
      const originalBtnHTML = btn.innerHTML;

      if (input.value) {
        btn.innerHTML = '<i class="bi bi-check-lg"></i> Subscribed!';
        btn.style.background = 'linear-gradient(135deg, #28A745, #1e7e34)';
        input.value = '';

        setTimeout(() => {
          btn.innerHTML = originalBtnHTML;
          btn.style.background = '';
        }, 2500);
      }
    });
  }

  // ===== SEARCH MODAL FOCUS =====
  const searchModal = document.getElementById('searchModal');
  if (searchModal) {
    searchModal.addEventListener('shown.bs.modal', function () {
      const searchInput = this.querySelector('input[type="text"]');
      if (searchInput) searchInput.focus();
    });
  }

  // ===== HERO CONTENT INITIAL VISIBILITY =====
  const firstHeroContent = document.querySelector('.hero-slide .hero-content');
  if (firstHeroContent) {
    firstHeroContent.style.opacity = '1';
    firstHeroContent.style.transform = 'translateY(0)';
  }

  // ===== SMOOTH ANCHOR SCROLLING =====
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight + 20 : 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

});