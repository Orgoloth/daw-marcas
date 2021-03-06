# Actividad de aprendizaje 2 – Lenguajes de marcas

## Formulario validado con JavaScript

Se ha insertado un segundo formulario en el html, con el objetivo simulado de darse de alta como cliente.
Tendremos los campos de nombre, apellidos, dirección y email.

Aprovechando las características que nos ofrece HTML5 haremos una pre-validación usando los campos adecuados (required, minlength, maxlength, pattern) y los tipos de input adecuados.

Al margen de esas validaciones básicas, para demostrar la validación mediante JS, añadimos las siguientes reglas de negocio:

*	El nombre debe estar compuesto por palabras con la primera letra en mayúscula.
*	Los apellidos deben ser al menos dos, con la primera letra en mayúscula.
*	La dirección debe contener un número de portal
*	El email debe pertenecer al dominio sanvalero.com

En caso de no cumplirse alguna de las reglas de negocio, se incluirá un mensaje en el html para informar de la naturaleza del error, y se bloquea la acción.

En caso de no haber errores, ejecutaremos la acción. Este punto lo enlazo con el requisito de la actividad de aprendizaje de realizar otro efecto con JavaScript, lanzando un mensaje emergente (ver más adelante)
Toda esta lógica la implementamos en su propia clase FormAltaGestion que mantenemos en su fichero particular.
Esta clase recibe dos elementos:

*	Formulario de donde extraer los datos para su comprobación
*	Elemento HTML donde inyectar mensajes de error

Al instanciarse la clase sobre escribe el evento submit del formulario pasado al constructor, para inyectar nuestra propia lógica de negocio.

En el callback del evento lanzamos todas las comprobaciones necesarias, cada cual insertará un mensaje de error si es necesario.

Al final, comprobamos si no hay mensajes, y de estar todo en orden, lanzamos la acción objetivo.
Utilizamos en esta clase características como funciones flecha, operadores de cortocircuito, manipulación del DOM, funciones de arrays, etc…

## Slider realizado con CSS o JavaScript

Para esta función vamos a utilizar swiper.js.

Añadimos el CSS propio suyo, y en nuestro script js importamos su script mediante CDN.

Añadimos las clases necesarias al html para interactuar con js

En nuestro script iniciamos el objeto Swiper para que ejecute el slider, personalizado con el efecto flip

Para evitar duplicidad visual, retiro el slider de la primera evaluación hecho con css a mano.
 
## Mapa de posición del negocio en Google Maps

Añadida sección tras el formulario de contacto, con un mapa de Google de una dirección concreta

## Zona central con presentación de 8 productos con efectos de animación en CSS o JavaScript

Utilizamos una mezcla de filtros y reglas CSS y eventos capturados desde JavaScript.

Desde JS: Al entrar en un elemento de la presentación, se le aplica dinámicamente la clase gris (aunque se podría hacer con un :hover directamente en CSS)

Desde CSS: Al aplicar la clase gris, aplicamos un filtro de escala de grises y un desenfoque, a la vez que mostramos el texto del producto, en negrita y con un color determinado de la paleta de colores, para darle mayor énfasis visual.

## Otro efecto realizado con JavaScript o JQuery

Añado una librería muy utilizada, SweetAlert2, que tiene como objetivo lanzar cuadros de dialogo. Muy útil para lanzar mensajes al usuario al realizar acciones o para notificar eventos.
En este caso lo utilizo en el momento de realizar el alta de cliente en su formulario, en lugar de enviar datos al exterior simplemente muestro una confirmación, mostrando además en la notificación el nombre, extraído del formulario.
El código se puede encontrar en la clase de gestión del formulario, en el método altaFormSubmit
