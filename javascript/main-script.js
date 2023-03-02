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
function getUsuarios() {
  let usuariosJSON = localStorage.getItem("usuarios");
  let usuarios = JSON.parse(usuariosJSON);
  return usuarios;
}
function obtenerIndiceUsuario(correoIniciarSesion, contraseniaIniciarSesion) {
  console.log(correoIniciarSesion);
  console.log(contraseniaIniciarSesion);
  if (getUsuarios() != null) {
    return getUsuarios().findIndex(
      (usuario) =>
        usuario.correo == correoIniciarSesion &&
        usuario.contrasenia == contraseniaIniciarSesion
    );
  } else {
    return -1;
  }
}
function mostrarModal(idModal) {
  const myModal = new bootstrap.Modal(document.getElementById(idModal));
  myModal.show();
}
