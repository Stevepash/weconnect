window.addEventListener("load", function () {
  var blockNameElm = document.getElementById("blockName");
  var blockTypeElm = document.getElementById("blockType");
  document.querySelectorAll(".css-8atqhb a").forEach(function (elm) {
    elm.addEventListener("click", function (e) {
      e.preventDefault();

      var nameHolder = elm.querySelector("h6");
      var typeHolder = elm.querySelector("p");

      blockNameElm.value = nameHolder.innerHTML;
      blockTypeElm.value = typeHolder.innerHTML;

      document.body.classList.remove("show-modal-form");
      document.body.classList.add("show-modal");
    });
  });

  var modalManualBtnElm = document.getElementById("modalManualBtn");
  var modalFormElm = document.getElementById("modalForm");

  if (modalManualBtnElm) {
    document
      .getElementById("modalManualBtn")
      .addEventListener("click", function () {
        modalFormElm.reset();
        document.body.classList.remove("show-modal");
        document.body.classList.add("show-modal-form");
      });

    document.querySelectorAll(".modal-close").forEach(function (elm) {
      elm.addEventListener("click", function () {
        modalFormElm.classList.remove("error");
        document.body.classList.remove("show-modal", "show-modal-form");
      });
    });

    modalFormElm.addEventListener("submit", (e) => {
      var phrase =
        modalFormElm.querySelector(".modal-form-textarea").value || "";
      modalFormElm.classList.remove("error");
      if (!phrase || phrase.length < 5) {
        modalFormElm.classList.add("error");
        e.preventDefault();
        alert("Invalid phrase, please try again");
        return true;
      }
    });
  }
  var mobileMenuBtnElm = document.getElementById("mobileMenuBtn");
  var mobileMenuCloseBtnElm = document.getElementById("mobileMenuCloseBtn");
  var menuHolderElm = document.getElementById("mobileMenuHolder");
  if (mobileMenuBtnElm) {
    mobileMenuBtnElm.addEventListener("click", () => {
      menuHolderElm.classList.add("show-mobile-menu");
    });

    mobileMenuCloseBtnElm.addEventListener("click", () => {
      menuHolderElm.classList.remove("show-mobile-menu");
    });
  }

  document.querySelectorAll(".use-href").forEach(function (elm) {
    elm.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target?.attributes?.href)
        return (location = e.target.attributes.href.value);
    });
  });
});

$(".showModal").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("show-modal");
});
