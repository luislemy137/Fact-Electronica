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

  // Array con los textos a mostrar
  const texts =  ["Minimarket", "Bodega", "Restaurante", "Panadería", "Grifos", "Ecommerce", "Tienda Virtual", "Pymes I Emprendedores"];
  let index = 0;
  const heading = document.getElementById("changing-text");

  // Función para mostrar los textos uno a la vez
  function showNextText() {
    heading.textContent = texts[index];
    index = (index + 1) % texts.length;
  }

  // Llamada inicial para mostrar el primer texto
  showNextText();

  // Intervalo de tiempo (en milisegundos) para cambiar de texto
  const interval = 1000; // Cambiar cada segundo (1000 ms)

  // Función para cambiar de texto automáticamente
  setInterval(showNextText, interval);

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
