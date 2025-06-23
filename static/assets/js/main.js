(function ($) {
  ("use strict");


  /*=================================
      JS Index Here
  ==================================*/
  /*
    01. Preloader
    02. Mobile Menu Active
    03. Sticky fix
    04. Scroll To Top
    05. Set Background Image
    06. Global Slider
    07. Ajax Contact Form
    08. Magnific Popup
    09. Popup Sidemenu   
    10. Counter section
    11. Progress Bar
    12. side cart toggle
    13. Search Box Popup
    14. Lenis Library Support
    15. Split Text Animation With GSAP Plugins
    16. Active Menu Item Based On URL
  
  */
  /*=================================
      JS Index End
  ==================================*/
  /*

  /**************************************
   ***** 01. Preloader or Preloader Must Needed In Your Project *****
   **************************************/
   $(window).on('load', function () {
    // Define GSAP animation for the preloader
    if ($('.preloader').length) {
      gsap.to('.preloader', {
        y: '-100%',
        duration: 1.2,
        ease: 'power3.inOut',
        onComplete: function () {
          $('.preloader').hide(); // Hide preloader after animation
        },
      });

      // Handle preloader close event
      $('.preloaderCls').on('click', function (e) {
        e.preventDefault(); // Prevent default action
        gsap.to('.preloader', {
          y: '-100%',
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: function () {
            $('.preloader').hide(); // Hide preloader after animation
          },
        });
      });
    }

    /**************************************
   ***** 15. WoW Js Animation *****
   **************************************/
   var wow = new WOW({
    boxClass: "wow",
    animateClass: "wow-animated",
    offset: 0,
    mobile: false,
    live: true,
    scrollContainer: null,
    resetAnimation: false,
  });
  wow.init();
  });

  /*---------- 02. Mobile Menu Active ----------*/
  $.fn.vsmobilemenu = function (options) {
    var opt = $.extend({
        menuToggleBtn: ".vs-menu-toggle",
        bodyToggleClass: "vs-body-visible",
        subMenuClass: "vs-submenu",
        subMenuParent: "vs-item-has-children",
        subMenuParentToggle: "vs-active",
        meanExpandClass: "vs-mean-expand",
        appendElement: '<span class="vs-mean-expand"></span>',
        subMenuToggleClass: "vs-open",
        toggleSpeed: 400,
      },
      options
    );

    return this.each(function () {
      var menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        var subMenu = "." + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css("display", "none");
            $(this).parent().removeClass(opt.subMenuParentToggle);
          }
        });
      }

      // Class Set Up for every submenu
      menu.find("li").each(function () {
        var submenu = $(this).find("ul");
        submenu.addClass(opt.subMenuClass);
        submenu.css("display", "none");
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev("a").append(opt.appendElement);
        submenu.next("a").append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        if ($($element).next("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).next("ul").slideToggle(opt.toggleSpeed);
          $($element).next("ul").toggleClass(opt.subMenuToggleClass);
        } else if ($($element).prev("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).prev("ul").slideToggle(opt.toggleSpeed);
          $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
        }
      }

      // Submenu toggle Button
      var expandToggler = "." + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      // Menu Show & Hide On Toggle Btn click
      $(opt.menuToggleBtn).each(function () {
        $(this).on("click", function () {
          menuToggle();
        });
      });

      // Hide Menu On out side click
      menu.on("click", function (e) {
        e.stopPropagation();
        menuToggle();
      });

      // Stop Hide full menu on menu click
      menu.find("div").on("click", function (e) {
        e.stopPropagation();
      });
    });
  };

  $(".vs-menu-wrapper").vsmobilemenu();

  /*---------- 03. Sticky fix ----------*/
  var lastScrollTop = "";
  var scrollToTopBtn = ".scrollToTop";

  function stickyMenu($targetMenu, $toggleClass, $parentClass) {
    var st = $(window).scrollTop();
    var height = $targetMenu.css("height");
    $targetMenu.parent().css("min-height", height);
    if ($(window).scrollTop() > 800) {
      $targetMenu.parent().addClass($parentClass);

      if (st > lastScrollTop) {
        $targetMenu.removeClass($toggleClass);
      } else {
        $targetMenu.addClass($toggleClass);
      }
    } else {
      $targetMenu.parent().css("min-height", "").removeClass($parentClass);
      $targetMenu.removeClass($toggleClass);
    }
    lastScrollTop = st;
  }
  $(window).on("scroll", function () {
    stickyMenu($(".sticky-active"), "active", "will-sticky");
    if ($(this).scrollTop() > 500) {
      $(scrollToTopBtn).addClass("show");
    } else {
      $(scrollToTopBtn).removeClass("show");
    }
  });

  /*---------- 04. Scroll To Top ----------*/
  $(scrollToTopBtn).each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({
          scrollTop: 0,
        },
        lastScrollTop / 3
      );
      return false;
    });
  });

  /*---------- 05. Set Background Image ----------*/
  if ($("[data-bg-src]").length > 0) {
    $("[data-bg-src]").each(function () {
      var src = $(this).attr("data-bg-src");
      $(this).css("background-image", "url(" + src + ")");
      $(this).removeAttr("data-bg-src").addClass("background-image");
    });
  }

  /*----------- 06. Global Slider ----------*/
  $(".vs-carousel").each(function () {
    var asSlide = $(this);

    // Collect Data
    function d(data) {
      return asSlide.data(data);
    }

    // Custom Arrow Button
    var prevButton =
      '<button type="button" class="slick-prev"><i class="' +
      d("prev-arrow") +
      '"></i></button>',
      nextButton =
      '<button type="button" class="slick-next"><i class="' +
      d("next-arrow") +
      '"></i></button>';

    // Function For Custom Arrow Btn
    $("[data-slick-next]").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $($(this).data("slick-next")).slick("slickNext");
      });
    });

    $("[data-slick-prev]").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $($(this).data("slick-prev")).slick("slickPrev");
      });
    });

    // Check for arrow wrapper
    if (d("arrows") == true) {
      if (!asSlide.closest(".arrow-wrap").length) {
        asSlide.closest(".container").parent().addClass("arrow-wrap");
      }
    }

    asSlide.slick({
      dots: d("dots") ? true : false,
      fade: d("fade") ? true : false,
      arrows: d("arrows") ? true : false,
      speed: d("speed") ? d("speed") : 1000,
      asNavFor: d("asnavfor") ? d("asnavfor") : false,
      autoplay: d("autoplay") == true ? true : false,
      infinite: d("infinite") == false ? false : true,
      slidesToShow: d("slide-show") ? d("slide-show") : 1,
      adaptiveHeight: d("adaptive-height") ? true : false,
      centerMode: d("center-mode") ? true : false,
      autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
      centerPadding: d("center-padding") ? d("center-padding") : "0",
      focusOnSelect: d("focuson-select") == false ? false : true,
      pauseOnFocus: d("pauseon-focus") ? true : false,
      pauseOnHover: d("pauseon-hover") ? true : false,
      variableWidth: d("variable-width") ? true : false,
      vertical: d("vertical") ? true : false,
      verticalSwiping: d("vertical") ? true : false,
      prevArrow: d("prev-arrow") ?
        prevButton : '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
      nextArrow: d("next-arrow") ?
        nextButton : '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
      rtl: $("html").attr("dir") == "rtl" ? true : false,
      responsive: [{
          breakpoint: 1600,
          settings: {
            arrows: d("xl-arrows") ? true : false,
            dots: d("xl-dots") ? true : false,
            slidesToShow: d("xl-slide-show") ?
              d("xl-slide-show") : d("slide-show"),
            centerMode: d("xl-center-mode") ? true : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            arrows: d("ml-arrows") ? true : false,
            dots: d("ml-dots") ? true : false,
            slidesToShow: d("ml-slide-show") ?
              d("ml-slide-show") : d("slide-show"),
            centerMode: d("ml-center-mode") ? true : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: d("lg-arrows") ? true : false,
            dots: d("lg-dots") ? true : false,
            // vertical:d("lg-vertical") ? true : false,
            slidesToShow: d("lg-slide-show") ?
              d("lg-slide-show") : d("slide-show"),
            centerMode: d("lg-center-mode") ? d("lg-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: d("md-arrows") ? true : false,
            dots: d("md-dots") ? true : false,
            vertical:d("md-vertical") ? true : false,
            slidesToShow: d("md-slide-show") ? d("md-slide-show") : 1,
            centerMode: d("md-center-mode") ? d("md-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 767,
          settings: {
            arrows: d("sm-arrows") ? true : false,
            dots: d("sm-dots") ? true : false,
            vertical:d("sm-vertical") ? true : false,
            slidesToShow: d("sm-slide-show") ? d("sm-slide-show") : 1,
            centerMode: d("sm-center-mode") ? d("sm-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: d("xs-arrows") ? true : false,
            dots: d("xs-dots") ? true : false,
            vertical:d("xs-vertical") ? true : false,
            slidesToShow: d("xs-slide-show") ? d("xs-slide-show") : 1,
            centerMode: d("xs-center-mode") ? d("xs-center-mode") : false,
            centerPadding: 0,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });

  /*----------- 07. Ajax Contact Form ----------*/
  var form = ".ajax-contact";
  var invalidCls = "is-invalid";
  var $email = '[name="email"]';
  var $validation =
    '[name="name"],[name="email"],[name="subject"],[name="message"]'; // Must be use (,) without any space
  var formMessages = $(".form-messages");

  function sendContact() {
    var formData = $(form).serialize();
    var valid;
    valid = validateContact();
    if (valid) {
      jQuery
        .ajax({
          url: $(form).attr("action"),
          data: formData,
          type: "POST",
        })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          formMessages.removeClass("error");
          formMessages.addClass("success");
          // Set the message text.
          formMessages.text(response);
          // Clear the form.
          $(form + ' input:not([type="submit"]),' + form + " textarea").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass("success");
          formMessages.addClass("error");
          // Set the message text.
          if (data.responseText !== "") {
            formMessages.html(data.responseText);
          } else {
            formMessages.html(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    }
  }

  function validateContact() {
    var valid = true;
    var formInput;

    function unvalid($validation) {
      $validation = $validation.split(",");
      for (var i = 0; i < $validation.length; i++) {
        formInput = form + " " + $validation[i];
        if (!$(formInput).val()) {
          $(formInput).addClass(invalidCls);
          valid = false;
        } else {
          $(formInput).removeClass(invalidCls);
          valid = true;
        }
      }
    }
    unvalid($validation);

    if (
      !$($email).val() ||
      !$($email)
      .val()
      .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    ) {
      $($email).addClass(invalidCls);
      valid = false;
    } else {
      $($email).removeClass(invalidCls);
      valid = true;
    }
    return valid;
  }

  $(form).on("submit", function (element) {
    element.preventDefault();
    sendContact();
  });

  /*----------- 08. Magnific Popup ----------*/
  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

 
  /*---------- 09. Popup Sidemenu ----------*/
  function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
    // Sidebar Popup
    $($sideMunuOpen).on("click", function (e) {
      e.preventDefault();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenu).on("click", function (e) {
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
    var sideMenuChild = $sideMenu + " > div";
    $(sideMenuChild).on("click", function (e) {
      e.stopPropagation();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenuCls).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
  }
  popupSideMenu(
    ".sidemenu-wrapper",
    ".sideMenuToggler",
    ".sideMenuCls",
    "show"
  );

 /*----------- 10. Counter section ----------*/
 var a = 0;

  $(window).scroll(function () {
    var mediaCounter = $(".media-counter");

    if (mediaCounter.length > 0) {
      var oTop = mediaCounter.offset().top - window.innerHeight;

      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-number").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 4000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });
        a = 1;
      }
    }
  });


  /*----------- 11. Progress Bar ----------*/
  document.addEventListener("DOMContentLoaded", function () {
    const progressBoxes = document.querySelectorAll(".progress-box");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Intersection observer threshold
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateProgressBar(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    progressBoxes.forEach((progressBox) => {
        observer.observe(progressBox);
    });

    function animateProgressBar(progressBox) {
        const progressBar = progressBox.querySelector(".progress-box__bar");
        const progressNumber = progressBox.querySelector(".progress-box__number");
        const targetWidth = parseInt(progressBar.style.width, 10); // Explicit radix 10
        let width = 0;

        const countInterval = setInterval(() => {
            width++;
            progressBar.style.width = width + "%";
            progressNumber.textContent = width + "%";
            if (width >= targetWidth) {
                clearInterval(countInterval);
            }
        }, 20);
    }
});

  /*----------- 12. side cart toggle----------*/
 
  // Event handler for the close button
  $(".sideMenuCls2").on("click", function() {
    $(".sideCart-wrapper").removeClass("show");
  });

  // Event handler for toggling the side cart when clicking outside the side cart wrapper
  $(".sideCart-wrapper").on("click", function(event) {
    if (!$(event.target).closest(".sidemenu-content").length) {
        toggleSideCart();
    }
  });

  // Event handler for the toggler button
  $(".sideCartToggler").on("click", function() {
    toggleSideCart();
  });

  // Function to toggle the side cart
  function toggleSideCart() {
    $(".sideCart-wrapper").toggleClass("show");
  }

   /*---------- 13. Search Box Popup ----------*/
   function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
    $($searchOpen).on("click", function (e) {
      e.preventDefault();
      $($searchBox).addClass($toggleCls);
    });
    $($searchBox).on("click", function (e) {
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
    $($searchBox)
      .find("form")
      .on("click", function (e) {
        e.stopPropagation();
        $($searchBox).addClass($toggleCls);
      });
    $($searchCls).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
  }
  popupSarchBox(
    ".popup-search-box",
    ".searchBoxTggler",
    ".searchClose",
    "show"
  );

  /*---------- 14. Lenis Library Support ----------*/
   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

   const lenis = new Lenis({
     lerp: 0.1,
     touchMultiplier: 0,
     smoothWheel: true, 
     smoothTouch: false,
     mouseWheel: false, 
     autoResize: true,
     smooth: true,
     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
     syncTouch: true,
   });
 
   lenis.on('scroll', ScrollTrigger.update);
 
   gsap.ticker.add((time) => {
     lenis.raf(time * 1200);
   });

/*---------- 15. Split Text Animation With GSAP Plugins ----------*/
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
  });
  
  function vsTitleAnimation() {
    const vsElements = document.querySelectorAll('.title-anime');
    if (!vsElements.length) return;
  
    vsElements.forEach((container) => {
      const quotes = container.querySelectorAll('.title-anime__title');
  
      quotes.forEach((quote) => {
        // Reset previous animation and revert SplitText if any
        if (quote.animation) {
          quote.animation.kill();
          quote.split.revert();
        }
  
        // Apply the 'capitalize' text-transform using vanilla JavaScript
        quote.style.textTransform = 'initial';
  
        // Identify animation style
        const animationClass = container.className.match(/animation-(style\d+)/);
        if (!animationClass || animationClass[1] === 'style4') return; // Skip style4
  
        // Apply SplitText to split content into lines, words, and chars
        quote.split = new SplitText(quote, {
          type: 'lines,words,chars',
          linesClass: 'split-line',
        });
  
        // Set perspective for 3D effects
        gsap.set(quote, { perspective: 1000 });
  
        // Define initial states based on animation style
        const chars = quote.split.chars;
        const style = animationClass[1];
  
        const initialStates = {
          style1: { opacity: 0, y: '90%', rotateX: '-40deg' },
          style2: { opacity: 0, x: '50' },
          style3: { opacity: 0 },
          style4: { opacity: 0, skewX: '-30deg', scale: 0.8 },
          style5: { opacity: 0, scale: 0.5 },
          style6: { opacity: 0, y: '-100%', rotate: '45deg' },
        };
  
        gsap.set(chars, initialStates[style]);
  
        // Animate the characters on scroll
        quote.animation = gsap.to(chars, {
          x: '0',
          y: '0',
          rotateX: '0',
          rotate: '0',
          opacity: 1,
          skewX: '0',
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.02,
          scrollTrigger: {
            trigger: quote,
            start: 'top 90%',
            toggleActions: 'play none none none', // Prevent repeat on refresh
          },
        });
      });
    });
  }
  
  // Refresh animations when ScrollTrigger refreshes
  ScrollTrigger.addEventListener('refreshInit', () => {
    document.querySelectorAll('.title-anime__title').forEach((quote) => {
      if (quote.split) quote.split.revert();
    });
  });
  
  ScrollTrigger.addEventListener('refresh', vsTitleAnimation);
  
  document.addEventListener('DOMContentLoaded', vsTitleAnimation);
  
  /*---------- 16. Active Menu Item Based On URL ----------*/
   document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.main-menu'); // Select the main menu container once
    const windowPathname = window.location.pathname;

    if (navMenu) {
      const navLinkEls = navMenu.querySelectorAll('a'); // Only get <a> tags inside the main menu

      navLinkEls.forEach((navLinkEl) => {
        const navLinkPathname = new URL(navLinkEl.href, window.location.origin)
          .pathname;

        // Match current URL with link's href
        if (
          windowPathname === navLinkPathname ||
          (windowPathname === '/index.html' && navLinkPathname === '/')
        ) {
          navLinkEl.classList.add('active');

          // Add 'active' class to all parent <li> elements
          let parentLi = navLinkEl.closest('li');
          while (parentLi && parentLi !== navMenu) {
            parentLi.classList.add('active');
            parentLi = parentLi.parentElement.closest('li'); // Traverse up safely
          }
        }
      });
    }
  });


    /**************************************
   ***** 17. Back to Top *****
   **************************************/
  // Get references to DOM elements
  const backToTopBtn = document.getElementById('backToTop');
  const progressCircle = document.querySelector('.progress');
  const progressPercentage = document.getElementById('progressPercentage');

  // Circle properties
  const CIRCLE_RADIUS = 40;
  const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

  // Set initial styles for the circle
  progressCircle.style.strokeDasharray = CIRCUMFERENCE;
  progressCircle.style.strokeDashoffset = CIRCUMFERENCE;

  // Update progress based on scroll position
  const updateProgress = () => {
    const scrollPosition = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (totalHeight > 0) {
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      const offset = CIRCUMFERENCE * (1 - scrollPercentage / 100);

      // Update the circle and percentage display
      progressCircle.style.strokeDashoffset = offset.toFixed(2);
      progressPercentage.textContent = `${Math.round(scrollPercentage)}%`;
    }
  };

  // Scroll to top using smooth animation
  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  };

  // Throttle function to limit function execution frequency
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  // Attach event listeners
  window.addEventListener('scroll', throttle(updateProgress, 50));
  backToTopBtn.addEventListener('click', scrollToTop);

  // Initial update to set the correct progress on page load
  updateProgress();


})(jQuery);

 /*----------- 00. Right Click Disable ----------*/
  window.addEventListener('contextmenu', function (e) {
    // do something here... 
    e.preventDefault();
  }, false);


  /*----------- 00. Inspect Element Disable ----------*/
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }