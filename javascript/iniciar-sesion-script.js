let formularioIniciarSesion = document.getElementById(
  "formularioIniciarSesion"
);
formularioIniciarSesion.addEventListener("submit", function (e) {
  e.preventDefault();
  if (verificarExistenciaUsuario() == -1) {
    mostrarModal("mensajeErrorIniciarSesion");
  } else {
    location.href = "../usuario/mis-cuentas.html";
  }
});
function verificarExistenciaUsuario() {
  let correoIniciarSesion = document.getElementById(
    "correoIniciarSesion"
  ).value;
  let contraseniaIniciarSesion = document.getElementById(
    "contraseniaIniciarSesion"
  ).value;
  return obtenerIndiceUsuario(correoIniciarSesion, contraseniaIniciarSesion);
}
