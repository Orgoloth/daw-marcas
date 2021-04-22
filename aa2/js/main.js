import { FormAltaGestion } from './form.alta.js';

new FormAltaGestion(
  document.querySelector('#form_alta_cliente'),
  document.querySelector('#form_alta_cliente_messages')
);

document.querySelectorAll('.presentacion_item').forEach((item) => {
  item.addEventListener('mouseenter', (event) => {
    event.target.classList.add('gris');
  });

  item.addEventListener('mouseleave', (event) => {
    event.target.classList.remove('gris');
  });
});
