"use strict";

(function () {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const navMenu = document.querySelector('.menu-list');

  // Hamburger Menu
  hamburgerButton.addEventListener('click', function () {
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    navMenu.setAttribute('aria-hidden', isExpanded);
    navMenu.classList.toggle('active');
  });

})();

