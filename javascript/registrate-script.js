let formularioRegistrate = document.getElementById("formularioRegistrate");
formularioRegistrate.addEventListener("submit", function (e) {
  e.preventDefault();
  agregarUsuario();
  resetearRegistrate();
  mostrarModal("mensajeConfirmacionRegistro");
});
function agregarUsuario() {
  let usuarios = [];
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
