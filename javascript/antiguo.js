let usuarios = [];
class Usuario {
  constructor(usuario, contrasenia) {
    this.usuario = usuario;
    this.contrasenia = contrasenia;
    this.tarjeta = null;
  }
  getUsuario() {
    alert(
      "MIS DATOS\nUsuario: " +
        this.usuario +
        "\nContraseña: " +
        this.contrasenia
    );
  }
  setTarjeta(tarjeta) {
    this.tarjeta = tarjeta;
  }
}
class Tarjeta {
  constructor(
    numeroTarjeta,
    cvvTarjeta,
    fechaDeVencimientoTarjeta,
    nombresTitularTarjeta,
    apellidosTitularTarjeta
  ) {
    this.numeroTarjeta = numeroTarjeta;
    this.cvvTarjeta = cvvTarjeta;
    this.fechaDeVencimientoTarjeta = fechaDeVencimientoTarjeta;
    this.nombresTitularTarjeta = nombresTitularTarjeta;
    this.apellidosTitularTarjeta = apellidosTitularTarjeta;
  }
  getTarjeta() {
    alert(
      "MI TARJETA\nNúmero: " +
        this.numeroTarjeta +
        "\nCVV: " +
        this.cvvTarjeta +
        "\nFecha de vencimiento: " +
        this.fechaDeVencimientoTarjeta +
        "\nNombres del titular: " +
        this.nombresTitularTarjeta +
        "\nApellidos del titular: " +
        this.apellidosTitularTarjeta
    );
  }
}
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
function alquilarCuentaPlataforma(indiceUsuarioIniciadoSesion) {
  let opcionMenuPlataformas;
  let montoAPagarPlataforma;
  let mesesAlquiler, nombrePlataforma;
  let respuestaCompra;
  let numeroTarjeta;
  let cvvTarjeta;
  let fechaDeVencimientoTarjeta;
  let nombresTitularTarjeta;
  let apellidosTitularTarjeta;
  let nuevaTarjeta;
  let respuestaGuardarTarjeta;
  let nombreUsuarioPlataforma;
  let contraseniaPlataforma;
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
  do {
    respuestaCompra = prompt(
      "Usted debe pagar S/. " +
        montoAPagarPlataforma +
        " por el aquiler de una cuenta de la Plataforma " +
        nombrePlataforma +
        " durante " +
        mesesAlquiler +
        " mes(es).\nIngrese OK para continuar o CANCELAR para cancelar compra:"
    );
    respuestaCompra = respuestaCompra.toLocaleUpperCase();
    if (respuestaCompra == "OK") {
      if (usuarios[indiceUsuarioIniciadoSesion].tarjeta == null) {
        do {
          numeroTarjeta = prompt(
            "INGRESAR TARJETA\nIngrese el número de la tarjeta:"
          );
          if (numeroTarjeta == "") {
            alert("Número de la tarjeta vacío. Debe volver a llenarlo.");
          }
        } while (numeroTarjeta == "");
        do {
          cvvTarjeta = prompt(
            "INGRESAR TARJETA\nNúmero: " +
              numeroTarjeta +
              "\nIngrese el CVV de la tarjeta:"
          );
          if (cvvTarjeta == "") {
            alert("CVV vacío. Debe volver a llenarlo.");
          }
        } while (cvvTarjeta == "");
        do {
          fechaDeVencimientoTarjeta = prompt(
            "INGRESAR TARJETA\nNúmero: " +
              numeroTarjeta +
              "\nCVV: " +
              cvvTarjeta +
              "\nIngrese la fecha de vencimiento de la tarjeta (MM/AA):"
          );
          if (fechaDeVencimientoTarjeta == "") {
            alert("Fecha de vencimiento vacía. Debe volver a llenarla.");
          }
        } while (fechaDeVencimientoTarjeta == "");
        do {
          nombresTitularTarjeta = prompt(
            "INGRESAR TARJETA\nNúmero: " +
              numeroTarjeta +
              "\nCVV: " +
              cvvTarjeta +
              "\nFecha de vencimiento: " +
              fechaDeVencimientoTarjeta +
              "\nIngrese los nombres del titular de la tarjeta:"
          );
          if (nombresTitularTarjeta == "") {
            alert("Nombres del titular vacío. Debe volver a llenarlo.");
          }
        } while (nombresTitularTarjeta == "");
        do {
          apellidosTitularTarjeta = prompt(
            "INGRESAR TARJETA\nNúmero: " +
              numeroTarjeta +
              "\nCVV: " +
              cvvTarjeta +
              "\nFecha de vencimiento: " +
              fechaDeVencimientoTarjeta +
              "\nNombres del titular: " +
              nombresTitularTarjeta +
              "\nIngrese los apellidos del titular de la tarjeta:"
          );
          if (apellidosTitularTarjeta == "") {
            alert("Apellidos del titular vacío. Debe volver a llenarlo.");
          }
        } while (apellidosTitularTarjeta == "");
        nuevaTarjeta = new Tarjeta(
          numeroTarjeta,
          cvvTarjeta,
          fechaDeVencimientoTarjeta,
          nombresTitularTarjeta,
          apellidosTitularTarjeta
        );
        do {
          respuestaGuardarTarjeta = prompt(
            "¿Desea guardar su tarjeta para próximas compras (SI, NO)?"
          );
          respuestaGuardarTarjeta = respuestaGuardarTarjeta.toLocaleUpperCase();
          if (
            respuestaGuardarTarjeta != "SI" &&
            respuestaGuardarTarjeta != "NO"
          ) {
            alert("Respuesta no válida. Vuelva a intentarlo.");
          }
        } while (
          respuestaGuardarTarjeta != "SI" &&
          respuestaGuardarTarjeta != "NO"
        );
        if (respuestaGuardarTarjeta == "SI") {
          usuarios[indiceUsuarioIniciadoSesion].setTarjeta(nuevaTarjeta);
        }
      }
      do {
        nombreUsuarioPlataforma = prompt(
          "NUEVA CUENTA EN " +
            nombrePlataforma.toLocaleUpperCase() +
            "\nIngrese el nombre de usuario para su cuenta en la plataforma:"
        );
        if (nombreUsuarioPlataforma == "") {
          alert("Nombre de usuario vacío. Debe volver a llenarlo.");
        }
      } while (nombreUsuarioPlataforma == "");
      do {
        contraseniaPlataforma = prompt(
          "NUEVA CUENTA EN " +
            nombrePlataforma.toLocaleUpperCase() +
            "\nNombre de usuario: " +
            nombreUsuarioPlataforma +
            "\nIngrese la contraseña para su cuenta en la plataforma:"
        );
        if (contraseniaPlataforma == "") {
          alert("Contraseña vacía. Debe volver a llenarla.");
        }
      } while (contraseniaPlataforma == "");
      alert("La cuenta se ha creado con éxito.");
    } else if (respuestaCompra != "CANCELAR") {
      alert("Respuesta no válida. Vuelva a intentarlo.");
    }
  } while (respuestaCompra != "OK" && respuestaCompra != "CANCELAR");
}

//MENÚ DEL USUARIO INICIADO SESIÓN
function menuUsuario(indiceUsuarioIniciadoSesion) {
  let opcionMenuUsuario = prompt(
    "BIENVENID@ " +
      usuarios[indiceUsuarioIniciadoSesion].usuario +
      "\n1. Ver mis datos.\n2. Ver datos de mi tarjeta.\n3. Alquilar cuenta de Streaming.\n0. Cerrar sesión.\nIngrese una opción:"
  );
  return opcionMenuUsuario;
}

//INICIAR SESIÓN
function iniciarSesion() {
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
    usuarios.some(
      (usuario) =>
        usuario.usuario === usuarioIniciarSesion &&
        usuario.contrasenia === contraseniaIniciarSesion
    )
  ) {
    let indiceUsuarioIniciadoSesion = usuarios.findIndex(
      (usuario) =>
        usuario.usuario === usuarioIniciarSesion &&
        usuario.contrasenia === contraseniaIniciarSesion
    );
    do {
      opcionMenuUsuario = menuUsuario(indiceUsuarioIniciadoSesion);
      if (opcionMenuUsuario == "1") {
        usuarios[indiceUsuarioIniciadoSesion].getUsuario();
      } else if (opcionMenuUsuario == "2") {
        if (usuarios[indiceUsuarioIniciadoSesion].tarjeta != null) {
          usuarios[indiceUsuarioIniciadoSesion].tarjeta.getTarjeta();
        } else {
          alert(
            "Aún no ha realizado ninguna compra, por lo que no hay información registrada de su tarjeta."
          );
        }
      } else if (opcionMenuUsuario == "3") {
        alquilarCuentaPlataforma(indiceUsuarioIniciadoSesion);
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
let usuarioRegistrarse, contraseniaRegistrarse, nuevoUsuario;
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
    nuevoUsuario = new Usuario(usuarioRegistrarse, contraseniaRegistrarse);
    usuarios.push(nuevoUsuario);
    console.log(usuarios);
  } else if (opcionMenu == "2") {
    iniciarSesion();
  } else if (opcionMenu != "0") {
    alert("Opción no válida. Vuelva a intentarlo.");
  }
} while (opcionMenu != "0");
