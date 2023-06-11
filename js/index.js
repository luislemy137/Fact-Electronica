'use strict';

window.addEventListener('DOMContentLoaded', () => {
 
  const headerNav = document.querySelector('.header-nav');

  const menuButton = document.getElementById('headerNavMenuIconContainer');
  const closeButton = document.getElementById('headerNavMenuCloseIconContainer');
  const linksMenu = document.querySelector('.header-nav__menu-link-list');
  // const links = document.querySelectorAll('.header-nav__menu-link');

  

  const openMenu = () => linksMenu.classList.add('header-nav__menu-link-list--open');

  const closeMenu = () => linksMenu.classList.remove('header-nav__menu-link-list--open');

  linksMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });

  window.addEventListener('scroll', () => {
    
    headerNav.classList.toggle('header-nav--scroll', scrollY > 0);

    heroTitle.style.transform = `translate(-${scrollY}px, ${0})`
    // heroTitle.style.top = `${scrollY * 0.375}px`;
    // heroTitle.style.left = `${50 - (scrollY * 0.375)}%`;
    // heroLearnButton.style.top = `${50 + (scrollY * 0.125)}%`;
  });
 

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  // links.forEach(element => element.addEventListener('click', closeMenu));
});