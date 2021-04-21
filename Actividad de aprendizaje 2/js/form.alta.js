export class FormAltaGestion {
  /**
   * Clase para gestionar los eventos y mensajes relacionados con el formulario de alta de clientes.
   *
   * @param altaForm Elemento de formulario del que sacar los datos
   * @param messagesDiv Elemento HTML donde inyectar los mensajes
   */
  constructor(altaForm, messagesDiv) {
    this.altaForm = altaForm;
    this.messagesDiv = messagesDiv;

    this.initAltaFormSubmitEvent();
  }

  /**
   * Capturamos el evento de envío del formulario, para realizar comprobaciones y dirigir la accion
   */
  initAltaFormSubmitEvent() {
    this.altaForm.addEventListener('submit', (event) => {
      event.preventDefault();

      this.clearMessages();
      this.checkName();
      this.checkLastNames();
      this.checkAddress();
      this.checkEmail();

      if (this.checkNoMessages()) this.altaFormSubmit();
    });
  }

  /**
   * Permitimos realizar la accion de alta
   * Ademas, como efecto adicional, mostramos una alerta personalizada por JavaScript mediante SweetAlert2
   */
  altaFormSubmit() {
    Swal.fire({
      title: '¡Bienvenido!',
      text: `¿${this.altaForm.nombre.value}, deseas continuar? `,
      icon: 'success',
      confirmButtonText: '¡Si, claro!',
    });
  }

  /**
   * Vaciamos la lista de mensajes
   */
  clearMessages() {
    while (this.messagesDiv.firstChild)
      this.messagesDiv.removeChild(this.messagesDiv.firstChild);
  }

  /**
   * Insertamos un mensaje nuevo
   *
   * @param message Mensaje a insertar
   */
  insertMessage(message) {
    // Insertamos un nuevo mensaje
    const newP = document.createElement('p');
    newP.innerHTML = message;
    this.messagesDiv.appendChild(newP);
  }

  /**
   * Comprobamos que no haya mensajes pendientes
   *
   * @returns si no hay mensajes pendientes
   */
  checkNoMessages() {
    return this.messagesDiv.childNodes.length === 0;
  }

  /**
   * Comprobamos que tenga la primera letra de cada palabra en mayuscula
   */
  checkName() {
    const words = this.altaForm.nombre.value.split(' ');
    if (!words.every(this.isCapitalFirstLetter))
      this.insertMessage(
        'Todas las palabras del nombre deben empezar con una letra mayúscula'
      );
  }

  /**
   * Comprobamos que tenga la primera letra de cada palabra en mayuscula
   * Comprobamos que se introduzcan al menos dis apellidos
   */
  checkLastNames() {
    const words = this.altaForm.apellidos.value.split(' ');

    if (!words.every(this.isCapitalFirstLetter))
      this.insertMessage(
        'Todas las palabras del apellido deben empezar con una letra mayúscula'
      );

    if (words.length < 2)
      this.insertMessage('Debe insertar al menos dos apellidos');
  }

  /**
   * Comprobamos que tenga al menos un numero de portal
   */
  checkAddress() {
    const words = this.altaForm.direccion.value.split(' ');
    if (!words.every(isNaN)) {
      this.insertMessage('La direccion debe tener un numero de portal');
    }
  }

  /**
   * Comprobamos que sea un correo de sanvalero.com
   */
  checkEmail() {
    const words = this.altaForm.email.value.split('@');
    if (words[1] != 'sanvalero.com')
      this.insertMessage('El dominio del correo debe ser sanvalero.com');
  }

  /**
   * Metodo de utilidad para comprobar si la primera letra de una palabra es mayuscula
   *
   * @param word Palabra para comprobar
   * @returns si la primera letra es mayuscula
   */
  isCapitalFirstLetter(word) {
    const firstLetter = word.slice(0, 1);
    return isNaN(firstLetter) && firstLetter === firstLetter.toUpperCase();
  }
}
