class Usuario {
  constructor(nombres, apellidos, correo, contrasenia, telefonoContacto, dni) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.contrasenia = contrasenia;
    this.telefonoContacto = telefonoContacto;
    this.dni = dni;
    this.tarjeta = null;
  }
  getTarjeta() {
    return this.tarjeta;
  }
  setTarjeta(tarjeta) {
    this.tarjeta = tarjeta;
  }
}
function getArregloLocalStorage(nombreArreglo) {
  let arregloJSON = localStorage.getItem(nombreArreglo);
  let arreglo = JSON.parse(arregloJSON);
  return arreglo;
}
function setArregloLocalStorage(nombreArreglo, nuevoArreglo) {
  let arregloJSON = JSON.stringify(nuevoArreglo);
  localStorage.setItem(nombreArreglo, arregloJSON);
}
function addArregloLocalStorage(nombreArreglo, adicionArreglo) {
  let arreglo = getArregloLocalStorage(nombreArreglo);
  if (arreglo == null) {
    arreglo = [];
  }
  arreglo.push(adicionArreglo);
  setArregloLocalStorage(nombreArreglo, arreglo);
}
function obtenerIndiceUsuario(correoIniciarSesion, contraseniaIniciarSesion) {
  if (getArregloLocalStorage("usuarios") != null) {
    return getArregloLocalStorage("usuarios").findIndex(
      (usuario) =>
        usuario.correo == correoIniciarSesion &&
        usuario.contrasenia == contraseniaIniciarSesion
    );
  } else {
    return -1;
  }
}
function mostrarModal(idModal) {
  let myModal = new bootstrap.Modal(document.getElementById(idModal));
  myModal.show();
}
