"use strict";
// Preloader area
const preloaderFunction = () => {
  document.getElementById("preloader").style.display = "none";
};

// toggleSideMenu start
const toggleSideMenu = () => {
  document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
if ($("nav").length) {
  const header = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY >= 100);
  });
}

$(document).ready(function () {
  // Testimonial section start
  // Owl carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 50,
    autoplayTimeout: 2000,
    nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-angle-left'></i>",
      "<i class='fa-regular fa-angle-right'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        dotsEach: 3,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,
        dotsEach: 2,
      },
      768: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 2,
        dots: false,
      },
    },
  });
  // Banner sllider start
  if ($(".banner-slider").length) {
    $(".banner-slider").slick({
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      arrows: false,
    });
  }
  // Banner sllider end

  // cmn select2 start
  $(".cmn-select2").select2();
  // cmn select2 end

  // cmn-select2 with image start
  $(".cmn-select2-image").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // cmn-select2 with image end

  // Modal select2 with image start
  $(".modal-select2-image").select2({
    dropdownParent: $("#formModal"),
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // MOdal select2 with image end

  // Cmn select2 tags start
  $(".cmn-select2-tags").select2({
    tags: true,
  });
  // Cmn select2 tags end

  // cmn select2 modal start
  $(".modal-select2").select2({
    dropdownParent: $("#formModal"),
  });
  // cmn select2 modal start
});

// input file preview
const previewImage = (id) => {
  document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Copy text start
function copyTextFunc() {
  const element = document.querySelector(".docs-code");
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}
// Copy text end

// Social share start
if ($("#shareBlock").length) {
  $("#shareBlock").socialSharingPlugin({
    urlShare: window.location.href,
    description: $("meta[name=description]").attr("content"),
    title: $("title").text(),
  });
}
// Social share end

// International Telephone Input start
if ($("#telephone").length) {
  const input = document.querySelector("#telephone");
  window.intlTelInput(input, {
    initialCountry: "bd",
    separateDialCode: true,
  });
}
// International Telephone Input end

// Copy page url start
if ($("#copyBtn").length) {
  document.getElementById("copyBtn").addEventListener("click", () => {
    let referralURL = document.getElementById("referralURL");
    referralURL.select();
    navigator.clipboard.writeText(referralURL.value);
    if (referralURL.value) {
      document.getElementById("copyBtn").innerHTML =
        '<i class="fa-regular fa-circle-check"></i> Copied';
      setTimeout(() => {
        document.getElementById("copyBtn").innerHTML =
          '<i class="fa-regular fa-copy"></i>copy';
      }, 1000);
    }
  });
}

// Copy page url end

// input field show hide password start
if (document.querySelector(".login-register-form")) {
  const passwordBoxes = document.querySelectorAll(".password-box");
  passwordBoxes.forEach((passwordBox) => {
    const passwordInput = passwordBox.querySelector(".password");
    const passwordIcon = passwordBox.querySelector(".password-icon");

    passwordIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.add("fa-eye-slash");
        passwordIcon.classList.remove("fa-eye");
      } else {
        passwordInput.type = "password";
        passwordIcon.classList.add("fa-eye");
        passwordIcon.classList.remove("fa-eye-slash");
      }
    });
  });
}

// input field show hide password end

// Dropdown select with Filter end
if ($(".search-box2").length) {
  function handleSelect(searchBox2, searchInput, searchItem) {
    searchInput.addEventListener("click", function (event) {
      searchBox2.classList.add("active");
      event.stopPropagation();
    });

    window.addEventListener("click", function () {
      searchBox2.classList.remove("active");
    });

    searchItem.forEach(function (searchItemSingle) {
      searchItemSingle.addEventListener("click", function () {
        const text = searchItemSingle.querySelector(".title");
        const textContent = text.textContent;
        searchInput.value = textContent;
        searchBox2.classList.remove("active");
      });
    });
  }

  const searchBox2 = document.querySelector("#search-box2");
  const searchInput = document.querySelector("#search-input");
  const searchItem = document.querySelectorAll("#search-result .search-item");
  handleSelect(searchBox2, searchInput, searchItem);

  // filter start
  function filterItems(inputId, items) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();

    items.forEach((item) => {
      const title = item.querySelector(".title");
      const txtValue = title.textContent || title.innerText;

      if (txtValue.toUpperCase().includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  const filterSearchInputId = "search-input";
  const filterSearchInput = document.getElementById(filterSearchInputId);
  const items = document.querySelectorAll("#search-result .search-item");
  filterSearchInput.addEventListener("keyup", function () {
    filterItems(filterSearchInputId, items);
  });
}
// Dropdown select with Filter end

// countdown
if ($("#countdown1").length) {
  $("#countdown1").countdown("2025/11/05", function (event) {
    $(this).html(
      event.strftime(
        '<div class="single-coundown"><h5>%H :</h5></div><div class="single-coundown"><h5>%M :</h5></div><div class="single-coundown"><h5>%S</h5></div>'
      )
    );
  });
}
