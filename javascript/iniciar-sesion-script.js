let formularioIniciarSesion = document.getElementById(
  "formularioIniciarSesion"
);
formularioIniciarSesion.addEventListener("submit", function (e) {
  e.preventDefault();
  let indiceUsuarioIniciadoSesion = verificarExistenciaUsuario();
  if (indiceUsuarioIniciadoSesion == -1) {
    mostrarModal("mensajeErrorIniciarSesion");
  } else {
    localStorage.setItem(
      "indiceUsuarioIniciadoSesion",
      indiceUsuarioIniciadoSesion.toString()
    );
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
