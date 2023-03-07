let formularioRegistrate = document.getElementById("formularioRegistrate");
formularioRegistrate.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputNombresRegistrate = document.getElementById(
    "inputNombresRegistrate"
  );
  let inputApellidosRegistrate = document.getElementById(
    "inputApellidosRegistrate"
  );
  let inputCorreoRegistrate = document.getElementById("inputCorreoRegistrate");
  let inputContraseniaRegistrate = document.getElementById(
    "inputContraseniaRegistrate"
  );
  let inputTelefonoContactoRegistrate = document.getElementById(
    "inputTelefonoContactoRegistrate"
  );
  let inputDniRegistrate = document.getElementById("inputDniRegistrate");
  let nuevoUsuario = new Usuario(
    inputNombresRegistrate.value,
    inputApellidosRegistrate.value,
    inputCorreoRegistrate.value,
    inputContraseniaRegistrate.value,
    inputTelefonoContactoRegistrate.value,
    inputDniRegistrate.value
  );
  if (
    obtenerIndiceUsuario(
      inputCorreoRegistrate.value,
      inputContraseniaRegistrate.value
    ) != -1
  ) {
    mostrarModal("mensajeErrorRegistroCorreoContrasenia");
  } else if (obtenerIndiceUsuarioConDni(inputDniRegistrate.value) != -1) {
    mostrarModal("mensajeErrorRegistroDni");
  } else {
    agregarUsuario(nuevoUsuario);
    resetearRegistrate();
    mostrarModal("mensajeConfirmacionRegistro");
  }
});
function agregarUsuario(nuevoUsuario) {
  let usuarios = [];
  let usuariosAlmacenadosJSON = localStorage.getItem("usuarios");
  if (usuariosAlmacenadosJSON != null) {
    usuarios = JSON.parse(usuariosAlmacenadosJSON);
  }
  usuarios.push(nuevoUsuario);
  let usuariosJSON = JSON.stringify(usuarios);
  localStorage.setItem("usuarios", usuariosJSON);
}
function resetearRegistrate() {
  let inputNombresRegistrate = document.getElementById(
    "inputNombresRegistrate"
  );
  let inputApellidosRegistrate = document.getElementById(
    "inputApellidosRegistrate"
  );
  let inputCorreoRegistrate = document.getElementById("inputCorreoRegistrate");
  let inputContraseniaRegistrate = document.getElementById(
    "inputContraseniaRegistrate"
  );
  let inputTelefonoContactoRegistrate = document.getElementById(
    "inputTelefonoContactoRegistrate"
  );
  let inputDniRegistrate = document.getElementById("inputDniRegistrate");
  inputNombresRegistrate.value = "";
  inputApellidosRegistrate.value = "";
  inputCorreoRegistrate.value = "";
  inputContraseniaRegistrate.value = "";
  inputTelefonoContactoRegistrate.value = "";
  inputDniRegistrate.value = "";
}
