window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "AW-664809471");

//student Carousel
$("#student-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed: 2000, // Default is 250
  items: 3, //Set Testimonial items
  loop: false,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: false,
  dots: true,
  navText: [
    "<i class='fal fa-arrow-left'></i>",
    "<i class='fal fa-arrow-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    568: {
      items: 1,
    },
    600: {
      items: 1,
    },
    667: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
//Client Carousel
$("#client-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed: 2000, // Default is 250
  items: 3, //Set Testimonial items
  loop: false,
  margin: 0,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: true,
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    480: {
      items: 2,
      nav: false,
    },
    568: {
      items: 2,
      nav: false,
    },
    600: {
      items: 2,
    },
    667: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

//Client Carousel
$("#assured-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: false,
  //smartSpeed: 2000, // Default is 250
  items: 3, //Set Testimonial items
  loop: true,
  margin: 0,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: true,
  navText: [
    "<i class='fal fa-arrow-left'></i>",
    "<i class='fal fa-arrow-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1.1,
      nav: false,
    },
    480: {
      items: 1.1,
      nav: false,
    },
    568: {
      items: 1.1,
      nav: false,
    },
    600: {
      items: 1,
    },
    667: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
/* -------------------------------  
         WOW ANIMATED JS START
/* ----------------------------- */

/* -------------------------------  
        INPUT PLACEHOLDER
/* ----------------------------- */

$("input,textarea")
  .focus(function () {
    $(this)
      .data("placeholder", $(this).attr("placeholder"))

      .attr("placeholder", "");
  })
  .blur(function () {
    $(this).attr("placeholder", $(this).data("placeholder"));
  });

/* ---------------------    
        back-top
/* --------------------- */

if ($("#back-top").length) {
  var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > scrollTrigger) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    };

  backToTop();

  $(window).on("scroll", function () {
    backToTop();
  });

  $("#back-top").on("click", function (e) {
    e.preventDefault();

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
}
var stickyNavTop = $("#header").offset().top;
var stickyNav = function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > stickyNavTop) {
    $("#header").addClass("sticky");
  } else {
    $("#header").removeClass("sticky");
  }
};

stickyNav();

$(window).scroll(function () {
  stickyNav();
});

$('a[href^="#applyBox"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 600) {
    $("#sideNavi").fadeIn();
  } else {
    $("#sideNavi").fadeOut();
  }
});

//----------------------------
var generateRandom8DigitNumber = function () {
  // Generate a random number between 10000000 and 99999999
  const min = 10000000;
  const max = 99999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

// Function to check if all required fields are filled and submit the form
function checkAndSubmitForm(form) {
  let allFilled = true;
  form
    .find("input[required], textarea[required], select[required]")
    .each(function () {
      if (!$(this).val()) {
        allFilled = false;
      }
    });

  // Submit the form if all fields are filled
  console.log("allFilled", allFilled);
  if (allFilled) {
    form.submit();
    console.log("form submitted");
  }
}

$(document).ready(function () {});
document.querySelectorAll(".contactForm").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = {
      name: form.querySelector('input[name="name"]').value,
      email: form.querySelector('input[name="email"]').value,
      phone: form.querySelector('input[name="phone"]').value,
    };

    // Show loading message
    var loadingMessage = form.querySelector(".loading-message");
    var successMessage = form.querySelector(".success-message");
    loadingMessage.style.display = "block";
    successMessage.style.display = "none";

    fetch("http://localhost:8080/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Hide loading message
        loadingMessage.style.display = "none";
        if (response.ok) {
          // Show success message
          successMessage.style.display = "block";
          form.reset();
        } else {
          // Handle error responses here
          console.error("Error:", response.statusText);
        }
      })
      .catch((error) => {
        // Hide loading message
        loadingMessage.style.display = "none";
        console.error("Error:", error);
      });
  });
});
