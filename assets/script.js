const menuIcon = document.querySelector("#menu-icon");
const overlay = document.querySelector("#overlay");
const closeIcon = document.querySelector("#close-icon");
const mobileMenu = document.querySelector("#mobile-menu");

function openMenu() {
  document.body.style.overflow = "hidden";
  overlay.style.display = "initial";
  mobileMenu.style.display = "initial";

  overlay.animate([{ opacity: "0" }, { opacity: "0.3" }], {
    duration: 2000,
  });
  mobileMenu
    .animate([{ width: "0" }, { width: "67.5%" }], {
      duration: 2000,
    })
    .finished.then(() => {
      closeIcon.style.display = "initial";
    });
}

function closeMenu() {
  closeIcon.style.display = "none";
  overlay.animate([{ opacity: "0.3" }, { opacity: "0" }], {
    duration: 2000,
  });

  mobileMenu
    .animate([{ width: "67.5%" }, { width: "0" }], {
      duration: 2000,
    })
    .finished.then(() => {
      document.body.style.overflow = "initial";
      overlay.style.display = "none";
      mobileMenu.style.display = "none";
    });
}

function removeLoadingAttributeOnPc() {
  var viewportWidth = window.innerWidth;
  var images = document.querySelectorAll(".lazy-loading");

  images.forEach(function (image) {
    if (viewportWidth < 992) {
      image.setAttribute("loading", "lazy");
    } else {
      image.removeAttribute("loading");
    }
  });
}

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
window.addEventListener("resize", removeLoadingAttributeOnPc);
