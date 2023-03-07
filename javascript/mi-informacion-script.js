window.addEventListener("load", function () {
  let usuarios = getArregloLocalStorage("usuarios");
  let indiceUsuarioIniciadoSesion = this.localStorage.getItem(
    "indiceUsuarioIniciadoSesion"
  );
  let nombresMiPerfil = document.getElementById("nombresMiPerfil");
  nombresMiPerfil.innerText = usuarios[indiceUsuarioIniciadoSesion].nombres;
  let apellidosMiPerfil = document.getElementById("apellidosMiPerfil");
  apellidosMiPerfil.innerText = usuarios[indiceUsuarioIniciadoSesion].apellidos;
  let correoMiPerfil = document.getElementById("correoMiPerfil");
  correoMiPerfil.innerText = usuarios[indiceUsuarioIniciadoSesion].correo;
  let contraseniaMiPerfil = document.getElementById("contraseniaMiPerfil");
  contraseniaMiPerfil.innerText =
    usuarios[indiceUsuarioIniciadoSesion].contrasenia;
  let telefonoContactoMiPerfil = document.getElementById(
    "telefonoContactoMiPerfil"
  );
  telefonoContactoMiPerfil.innerText =
    usuarios[indiceUsuarioIniciadoSesion].telefonoContacto;
  let dniMiPerfil = document.getElementById("dniMiPerfil");
  dniMiPerfil.innerText = usuarios[indiceUsuarioIniciadoSesion].dni;
});
