$(".header-nav__burger").click(function (e) {
  e.preventDefault();
  $(".nav-mobile").slideToggle();
  $(this).toggleClass(".active");
  $("body").css("overflow", "hidden");
});

$(".nav-mobile__close").click(function () {
  $("*").not("body").css("overflow", "auto");
});

// Click function for show the Modal

$(".header-nav__contact-btn, .header-main__button, .main-box-button").on(
  "click",
  function () {
    $(".mask").addClass("active-modal");
  }
);

// Function for close the Modal

function closeModal() {
  $(".mask").removeClass("active-modal");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function () {
  closeModal();
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

// Slider

$(".regular").slick({
  infinite: true,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
