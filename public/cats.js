"use strict";

(function () {
  const modalEl = document.getElementById("subscribe-modal");
  const openEl = document.querySelectorAll('.subscribe-btn');
  const closeEl = document.getElementById("cancel-btn");

  const formEl = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("email");
  const confirmInput = document.getElementById("confirm-email");

  const emailError = document.getElementById("email-error");
  const confirmError = document.getElementById("confirm-error");

  const hamburgerButton = document.querySelector('.hamburger-button');
  const navMenu = document.querySelector('.menu-list');

  // Modal
  openEl.forEach(button => {
    button.addEventListener("click", () => {
      modalEl.showModal();
    });
  });

  closeEl.addEventListener("click", () => {
    modalEl.close();
  });

  // Input
  // Input Email
  emailInput.addEventListener("input", () => {
    if (!emailInput.value.includes("@")) {
      emailError.innerText = "This field must contain a valid email address including '@'";
      emailError.classList.add("visible");
      emailInput.classList.add("error");
      emailInput.setAttribute("aria-invalid", "true");
    } else {
      emailError.innerText = "";
      emailError.classList.remove("visible");
      emailInput.classList.remove("error");
      emailInput.setAttribute("aria-invalid", "false");
    }
  });

  // Input Confirm Email
  confirmInput.addEventListener("input", () => {
    if (confirmInput.value !== emailInput.value) {
      confirmError.innerText = "This field must match the provided email address";
      confirmError.classList.add("visible");
      confirmInput.classList.add("error");
      confirmInput.setAttribute("aria-invalid", "true");
    } else if (!confirmInput.value.includes("@")) {
      confirmError.innerText = "This field must contain a valid email address including '@'";
      confirmError.classList.add("visible");
      confirmInput.classList.add("error");
      confirmInput.setAttribute("aria-invalid", "true");
    } else {
      confirmError.innerText = "";
      confirmError.classList.remove("visible");
      confirmInput.classList.remove("error");
      confirmInput.setAttribute("aria-invalid", "false");
    }
  });

  // Submit the Form
  formEl.addEventListener("submit", (event) => {
    let isFormValid = true;

    // Check Email
    if (emailInput.value === "") {
      emailError.innerText = "This field is required";
      emailError.classList.add("visible");
      emailInput.classList.add("error");
      emailInput.setAttribute("aria-invalid", "true");
      isFormValid = false;
    } else if (!emailInput.value.includes("@")) {
      emailError.innerText = "This field be a valid Email address including a @";
      emailError.classList.add("visible");
      emailInput.classList.add("error");
      emailInput.setAttribute("aria-invalid", "true");
      isFormValid = false;
    }

    // Check Confirm Email
    if (confirmInput.value === "") {
      confirmError.innerText = "This field is required";
      confirmError.classList.add("visible");
      confirmInput.classList.add("error");
      confirmInput.setAttribute("aria-invalid", "true");
      isFormValid = false;
    } else if (confirmInput.value !== emailInput.value) {
      confirmError.innerText = "This field must match the provided email address";
      confirmError.classList.add("visible");
      confirmInput.classList.add("error");
      confirmInput.setAttribute("aria-invalid", "true");
      isFormValid = false;
    } else if (!confirmInput.value.includes("@")) {
      confirmError.innerText = "This field be a valid Email address including a @";
      confirmError.classList.add("visible");
      confirmInput.classList.add("error");
      confirmInput.setAttribute("aria-invalid", "true");
      isFormValid = false;
    }

    // preventDefault
    if (!isFormValid) {
      event.preventDefault();
    }
  });

  // Hamburger Menu
  hamburgerButton.addEventListener('click', function () {
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    navMenu.setAttribute('aria-hidden', isExpanded);
    navMenu.classList.toggle('active');
  });

})();

