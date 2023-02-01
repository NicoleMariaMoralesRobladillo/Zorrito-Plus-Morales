//OBTENER NOMBRE DE LA PLATAFORMA
function obtenerNombrePlataforma(opcionMenuPlataformas) {
  let nombrePlataforma;
  if (opcionMenuPlataformas == "1") {
    nombrePlataforma = "Netflix";
  } else if (opcionMenuPlataformas == "2") {
    nombrePlataforma = "Movistar Play";
  } else if (opcionMenuPlataformas == "3") {
    nombrePlataforma = "Disney +";
  } else if (opcionMenuPlataformas == "4") {
    nombrePlataforma = "Star +";
  } else if (opcionMenuPlataformas == "5") {
    nombrePlataforma = "HBO Max";
  } else if (opcionMenuPlataformas == "6") {
    nombrePlataforma = "Prime Video";
  } else if (opcionMenuPlataformas == "7") {
    nombrePlataforma = "Spotify";
  }
  return nombrePlataforma;
}

//OBTENER MONTO A PAGAR POR EL AQUILER DE LA CUENTA
function obtenerMontoAPagar(opcionMenuPlataformas, mesesAlquiler) {
  let montoAPagarPlataforma;
  if (opcionMenuPlataformas == "1") {
    montoAPagarPlataforma = 12;
  } else if (opcionMenuPlataformas == "2") {
    montoAPagarPlataforma = 5;
  } else if (opcionMenuPlataformas == "3") {
    montoAPagarPlataforma = 7;
  } else if (opcionMenuPlataformas == "4") {
    montoAPagarPlataforma = 7;
  } else if (opcionMenuPlataformas == "5") {
    montoAPagarPlataforma = 8;
  } else if (opcionMenuPlataformas == "6") {
    montoAPagarPlataforma = 7;
  } else if (opcionMenuPlataformas == "7") {
    montoAPagarPlataforma = 7;
  }
  montoAPagarPlataforma *= mesesAlquiler;
  return montoAPagarPlataforma;
}

//ALQUILAR CUENTA DE PLATAFORMA
function alquilarCuentaPlataforma() {
  let opcionMenuPlataformas;
  let montoAPagarPlataforma;
  let mesesAlquiler, nombrePlataforma;
  do {
    opcionMenuPlataformas = prompt(
      "ALQUILAR CUENTA DE STREAMING\n1. Netflix - S/. 12 x Mes\n2. Movistar Play - S/. 5 x Mes\n3. Disney + - S/. 7 x Mes\n4. Star + - S/. 7 x Mes\n5. HBO Max - S/. 8 x Mes\n6. Prime Video - S/. 7 x Mes\n7. Spotify - S/. 7 x Mes\nIngrese una opción:"
    );
    if (
      opcionMenuPlataformas != "1" &&
      opcionMenuPlataformas != "2" &&
      opcionMenuPlataformas != "3" &&
      opcionMenuPlataformas != "4" &&
      opcionMenuPlataformas != "5" &&
      opcionMenuPlataformas != "6" &&
      opcionMenuPlataformas != "7"
    ) {
      alert("Opción no válida. Vuelva a intentarlo.");
    }
  } while (
    opcionMenuPlataformas != "1" &&
    opcionMenuPlataformas != "2" &&
    opcionMenuPlataformas != "3" &&
    opcionMenuPlataformas != "4" &&
    opcionMenuPlataformas != "5" &&
    opcionMenuPlataformas != "6" &&
    opcionMenuPlataformas != "7"
  );
  nombrePlataforma = obtenerNombrePlataforma(opcionMenuPlataformas);
  do {
    mesesAlquiler = parseInt(
      prompt(
        "ALQUILAR CUENTA DE STREAMING\nPlataforma: " +
          nombrePlataforma +
          "\nIngrese la cantidad de meses de alquiler:"
      )
    );
    if (isNaN(mesesAlquiler) || mesesAlquiler <= 0) {
      alert("Cantidad de meses no es un número positivo. Vuelva a intentarlo.");
    }
  } while (isNaN(mesesAlquiler) || mesesAlquiler <= 0);
  montoAPagarPlataforma = obtenerMontoAPagar(
    opcionMenuPlataformas,
    mesesAlquiler
  );
  alert(
    "Usted debe pagar S/. " +
      montoAPagarPlataforma +
      " por el aquiler de una cuenta de la Plataforma " +
      nombrePlataforma +
      " durante " +
      mesesAlquiler +
      " mes(es)."
  );
}

//MENÚ DEL USUARIO INICIADO SESIÓN
function menuUsuario(usuarioIniciarSesion) {
  let opcionMenuUsuario = prompt(
    "BIENVENID@ " +
      usuarioIniciarSesion +
      "\n1. Ver mis datos.\n2. Alquilar cuenta de Streaming.\n0. Cerrar sesión.\nIngrese una opción:"
  );
  return opcionMenuUsuario;
}

//VALIDAR USUARIO
function validarUsuarioIniciarSesion(
  usuarioIniciarSesion,
  contraseniaIniciarSesion,
  usuarioRegistrarse,
  contraseniaRegistrarse
) {
  if (
    usuarioIniciarSesion == usuarioRegistrarse &&
    contraseniaIniciarSesion == contraseniaRegistrarse
  ) {
    return true;
  } else {
    return false;
  }
}

//VER MIS DATOS DE USUARIO
function verMisDatos(usuario, contrasenia) {
  alert("MIS DATOS\n" + "Usuario: " + usuario + "\nContraseña: " + contrasenia);
}

//INICIAR SESIÓN
function iniciarSesion(usuarioRegistrarse, contraseniaRegistrarse) {
  let usuarioIniciarSesion, contraseniaIniciarSesion;
  let opcionMenuUsuario;
  do {
    usuarioIniciarSesion = prompt("INICIAR SESIÓN\nIngrese su usuario:");
    if (usuarioIniciarSesion == "") {
      alert("Usuario vacío. Debe volver a llenarlo.");
    }
  } while (usuarioIniciarSesion == "");
  do {
    contraseniaIniciarSesion = prompt(
      "INICIAR SESIÓN\nUsuario: " +
        usuarioIniciarSesion +
        "\nIngrese su contraseña:"
    );
    if (contraseniaIniciarSesion == "") {
      alert("Contraseña vacía. Debe volver a llenarla.");
    }
  } while (contraseniaIniciarSesion == "");
  if (
    validarUsuarioIniciarSesion(
      usuarioIniciarSesion,
      contraseniaIniciarSesion,
      usuarioRegistrarse,
      contraseniaRegistrarse
    )
  ) {
    do {
      opcionMenuUsuario = menuUsuario(usuarioIniciarSesion);
      if (opcionMenuUsuario == "1") {
        verMisDatos(usuarioIniciarSesion, contraseniaIniciarSesion);
      } else if (opcionMenuUsuario == "2") {
        alquilarCuentaPlataforma();
      } else if (opcionMenuUsuario != "0") {
        alert("Opción no válida. Vuelva a intentarlo.");
      }
    } while (opcionMenuUsuario != "0");
  } else {
    alert("Usuario y/o contraseña errónea.");
  }
}

//MENÚ PRINCIPAL
function menuPrincipal() {
  let opcionMenu = prompt(
    "BIENVENID@ A ZORRITO PLUS\n1. Registrarse\n2. Iniciar sesión\n0. Salir\nIngrese una opción:"
  );
  return opcionMenu;
}

//PROGRAMA PRINCIPAL
let opcionMenu;
let usuarioRegistrarse, contraseniaRegistrarse;
do {
  opcionMenu = menuPrincipal();
  if (opcionMenu == "1") {
    do {
      usuarioRegistrarse = prompt("REGISTRARSE\nIngrese su usuario:");
      if (usuarioRegistrarse == "") {
        alert("Usuario vacío. Debe volver a llenarlo.");
      }
    } while (usuarioRegistrarse == "");
    do {
      contraseniaRegistrarse = prompt(
        "REGISTRARSE\nUsuario: " +
          usuarioRegistrarse +
          "\nIngrese su contraseña:"
      );
      if (contraseniaRegistrarse == "") {
        alert("Contraseña vacía. Debe volver a llenarla.");
      }
    } while (contraseniaRegistrarse == "");
  } else if (opcionMenu == "2") {
    iniciarSesion(usuarioRegistrarse, contraseniaRegistrarse);
  } else if (opcionMenu != "0") {
    alert("Opción no válida. Vuelva a intentarlo.");
  }
} while (opcionMenu != "0");
