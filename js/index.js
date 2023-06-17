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
  });

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  // links.forEach(element => element.addEventListener('click', closeMenu));

  const textElement = document.getElementById('changing-text');
  const words = ["Minimarket", "Bodega", "Restaurante", "Panadería", "Grifos", "Tienda Virtual I Ecommerce", "Pymes I Emprendedores"];
  let index = 0;

  function changeText() {
    textElement.classList.add('fade-out'); // Agregar clase para iniciar la animación de fundido
    setTimeout(() => {
      textElement.textContent = words[index];
      index = (index + 1) % words.length;
      textElement.classList.remove('fade-out'); // Quitar clase para finalizar la animación de fundido
    }, 500); // Esperar 0.5 segundos (igual a la duración de la transición en el CSS)
  }

  // Cambiar la palabra cada 2 segundos
  setInterval(changeText, 2000);

  const expandButtons = document.querySelectorAll('.modulos__topic-button');
  expandButtons.forEach(button => {
    button.addEventListener('click', () => {
      const topic = button.closest('.modulos__topic'); // Cambio en la selección del contenedor padre
      const paragraph = topic.querySelector('.modulos__topic-paragraph');
      const expandIcon = button.querySelector('.modulos__topic-button-icon'); // Selecciona el icono de expansión dentro del botón
      topic.classList.toggle('expanded');
      paragraph.classList.toggle('show');
      expandIcon.classList.toggle('modulos__topic-button-icon--rotate-180'); // Agrega esta línea para rotar el icono
    });
  });
});
