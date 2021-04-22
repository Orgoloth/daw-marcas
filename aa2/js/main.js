/**
 * Importamos libreria Swiper para el slider con JS
 */
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

/**
 * Importamos nuestra clase para gestionar el formulario de alta
 */
import { FormAltaGestion } from './form.alta.js';

/**
 * Invocamos nuestra clase de gestion del formulario de alta
 */
new FormAltaGestion(
  document.querySelector('#form_alta_cliente'),
  document.querySelector('#form_alta_cliente_messages')
);

/**
 * Añadimos el comportamiento para la seccion de presentación de productos
 */
document.querySelectorAll('.presentacion_item').forEach((item) => {
  item.addEventListener('mouseenter', (event) => {
    event.target.classList.add('gris');
  });

  item.addEventListener('mouseleave', (event) => {
    event.target.classList.remove('gris');
  });
});

/**
 * Añadimos el comportamiento del slider con Swiper
 */
const swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'flip',
});
