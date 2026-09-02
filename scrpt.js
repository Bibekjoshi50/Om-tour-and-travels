// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

});


// ===============================
// PACKAGE FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const packageCards = document.querySelectorAll(".package-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    packageCards.forEach(card => {

      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 20);

      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";

        setTimeout(() => {
          card.style.display = "none";
        }, 250);
      }

    });

  });

});


// ===============================
// BOOK PACKAGE BUTTON
// ===============================

const packageButtons = document.querySelectorAll(".book-package");
const destinationInput = document.getElementById("destination");
const messageInput = document.getElementById("message");

packageButtons.forEach(button => {

  button.addEventListener("click", () => {

    const packageName = button.dataset.package;

    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(() => {

      messageInput.value =
        `I am interested in the "${packageName}" package. Please provide more details.`;

      destinationInput.focus();

    }, 700);

  });

});


// ===============================
// DATE MINIMUM
// ===============================

const dateInput = document.getElementById("date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// ===============================
// BOOKING FORM
// ===============================

const bookingForm = document.getElementById("bookingForm");
const successModal = document.getElementById("successModal");

bookingForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const destination = document.getElementById("destination").value.trim();

  if (!name || !phone || !destination) {
    alert("Please fill in all required fields.");
    return;
  }

  if (phone.length < 7) {
    alert("Please enter a valid phone number.");
    return;
  }

  successModal.classList.add("show");

  bookingForm.reset();

});


// ===============================
// CLOSE MODAL
// ===============================

const modalClose = document.getElementById("modalClose");
const modalOk = document.getElementById("modalOk");

function closeModal() {
  successModal.classList.remove("show");
}

modalClose.addEventListener("click", closeModal);
modalOk.addEventListener("click", closeModal);

successModal.addEventListener("click", (event) => {

  if (event.target === successModal) {
    closeModal();
  }

});


// ===============================
// ESCAPE KEY
// ===============================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
    navbar.classList.remove("show");
  }

});