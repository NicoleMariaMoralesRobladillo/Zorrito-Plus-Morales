const addCreditCardModal = new bootstrap.Modal(
  document.getElementById("add-credit-card-modal")
);
class ItemCarrito {
  constructor(plataforma, tiempoDuracion) {
    this.id = localStorage.getItem("proximoIdItemCarrito");
    localStorage.setItem(
      "proximoIdItemCarrito",
      (parseInt(this.id, "10") + 1).toString()
    );
    this.plataforma = plataforma;
    if (plataforma == "Netflix") {
      this.precio = 12;
      this.nombreImagenPlataforma = "netflix";
    } else if (plataforma == "Movistar Play") {
      this.precio = 5;
      this.nombreImagenPlataforma = "movistar-play";
    } else if (plataforma == "Disney Plus") {
      this.precio = 7;
      this.nombreImagenPlataforma = "disney-plus";
    } else if (plataforma == "Star Plus") {
      this.precio = 7;
      this.nombreImagenPlataforma = "star-plus";
    } else if (plataforma == "HBO Max") {
      this.precio = 8;
      this.nombreImagenPlataforma = "HBO-max";
    } else if (plataforma == "Prime Video") {
      this.precio = 7;
      this.nombreImagenPlataforma = "prime-video";
    } else if (plataforma == "Spotify") {
      this.precio = 7;
      this.nombreImagenPlataforma = "spotify";
    }
    this.tiempoDuracion = tiempoDuracion;
    this.total = tiempoDuracion * this.precio;
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
}
class Cuenta {
  constructor(
    plataforma,
    correo,
    contrasenia,
    fechaInicio,
    tiempoDuracion,
    dni
  ) {
    this.plataforma = plataforma;
    this.correo = correo;
    this.contrasenia = contrasenia;
    this.fechaInicio = fechaInicio;
    this.tiempoDuracion = tiempoDuracion;
    this.dni = dni;
  }
}
function regularizarDatosLocalStorage() {
  let proximoIdItemCarritoValor;
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  let itemsCarritoAlmacenados = JSON.parse(itemsCarritoAlmacenadosJSON);
  if (
    itemsCarritoAlmacenadosJSON == null ||
    itemsCarritoAlmacenados.length == 0
  ) {
    proximoIdItemCarritoValor = "0";
  } else {
    proximoIdItemCarritoValor = (
      parseInt(
        itemsCarritoAlmacenados[itemsCarritoAlmacenados.length - 1].id,
        "10"
      ) + 1
    ).toString();
  }
  localStorage.setItem("proximoIdItemCarrito", proximoIdItemCarritoValor);
}
window.addEventListener("load", function () {
  regularizarDatosLocalStorage();
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  let itemsCarritoAlmacenados = JSON.parse(itemsCarritoAlmacenadosJSON);
  let itemsCarritoContenedor = document.getElementById(
    "itemsCarritoContenedor"
  );
  itemsCarritoContenedor.innerText = "";
  if (itemsCarritoAlmacenadosJSON != null) {
    for (let itemCarrito of itemsCarritoAlmacenados) {
      insertarDivItemCarrito(itemCarrito);
    }
    actualizarTotalItemsCarrito();
  }
});
function agregarItemCarrito(nuevoItemCarrito) {
  let itemsCarrito = [];
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  if (itemsCarritoAlmacenadosJSON != null) {
    itemsCarrito = JSON.parse(itemsCarritoAlmacenadosJSON);
  }
  itemsCarrito.push(nuevoItemCarrito);
  let itemsCarritoJSON = JSON.stringify(itemsCarrito);
  localStorage.setItem("itemsCarrito", itemsCarritoJSON);
}
function insertarDivItemCarrito(nuevoItemCarrito) {
  let divItemCarrito = document.createElement("div");
  let clasesDivItemCarrito = [
    "d-flex",
    "flex-column",
    "flex-sm-row",
    "flex-wrap",
    "align-items-center",
    "position-relative",
    "justify-content-center",
  ];
  let itemsCarritoContenedor = document.getElementById(
    "itemsCarritoContenedor"
  );
  divItemCarrito.classList.add(...clasesDivItemCarrito);
  divItemCarrito.id = nuevoItemCarrito.id;
  divItemCarrito.innerHTML = `
  <div class="m-3">
    <div class="p-2 icono--6 bg-black icono icono--${nuevoItemCarrito.nombreImagenPlataforma}">
      <img
        src="../../images/${nuevoItemCarrito.nombreImagenPlataforma}-logo.png"
        alt="Logo de ${nuevoItemCarrito.plataforma}"
        class="img-fluid"
      />
    </div>
  </div>
  <div class="m-3 text-center flex-fill">
    <div class="text-white fs-5 pb-1 text-break lh-base my-auto">
      ${nuevoItemCarrito.plataforma}
    </div>
    <div class="text-white fs-5 py-1 text-break lh-base my-auto">
      S/. ${nuevoItemCarrito.precio} x ${nuevoItemCarrito.tiempoDuracion} meses = S/. ${nuevoItemCarrito.total}
    </div>
  </div>
  <button
    type="button"
    class="position-absolute end-0 top-0 button--eliminar-cart p-2 bg-transparent border-0"
  >
    <i class="fa-solid fa-trash"></i>
  </button>`;
  let buttonEliminarCart = divItemCarrito.lastChild;
  buttonEliminarCart.addEventListener("click", function () {
    let idDivItemCarrito = divItemCarrito.id;
    divItemCarrito.remove();
    eliminarItemCarrito(idDivItemCarrito);
    actualizarTotalItemsCarrito();
  });
  itemsCarritoContenedor.append(divItemCarrito);
}
function eliminarItemCarrito(idItemCarrito) {
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  let itemsCarritoAlmacenados = JSON.parse(itemsCarritoAlmacenadosJSON);
  itemsCarritoAlmacenados.splice(
    itemsCarritoAlmacenados.findIndex(
      (itemCarrito) => itemCarrito.id == idItemCarrito
    ),
    1
  );
  let itemsCarritoJSON = JSON.stringify(itemsCarritoAlmacenados);
  localStorage.setItem("itemsCarrito", itemsCarritoJSON);
}
function sumaTotalItemsCarrito(itemsCarrito) {
  let totalCarrito = 0;
  for (let itemCarrito of itemsCarrito) {
    totalCarrito += itemCarrito.total;
  }
  return totalCarrito;
}
function actualizarTotalItemsCarrito() {
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  let itemsCarritoAlmacenados = JSON.parse(itemsCarritoAlmacenadosJSON);
  let totalItemsCarrito = sumaTotalItemsCarrito(itemsCarritoAlmacenados);
  let totalItemsCarritoTag = document.getElementById("totalItemsCarrito");
  totalItemsCarritoTag.innerText = `Total = S/. ${totalItemsCarrito}`;
}
let primerButtonComprar = document.getElementById("primerButtonComprar");
primerButtonComprar.addEventListener("click", function () {
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  let itemsCarritoAlmacenados = JSON.parse(itemsCarritoAlmacenadosJSON);
  if (
    itemsCarritoAlmacenados == null ||
    sumaTotalItemsCarrito(itemsCarritoAlmacenados) == 0
  ) {
    mostrarModal("mensajeCarritoVacio");
  } else {
    addCreditCardModal.show();
  }
});
let segundoButtonComprar = document.getElementById("segundoButtonComprar");
segundoButtonComprar.addEventListener("click", function (e) {
  e.preventDefault();
  let numeroTarjeta = document.getElementById("numero-tarjeta");
  let cvvTarjeta = document.getElementById("cvv-tarjeta");
  let fechaDeVencimientoTarjeta = document.getElementById(
    "fecha-vencimiento-tarjeta"
  );
  let nombresTitularTarjeta = document.getElementById(
    "nombres-titular-tarjeta"
  );
  let apellidosTitularTarjeta = document.getElementById(
    "apellidos-titular-tarjeta"
  );
  if (
    numeroTarjeta.value != "" &&
    cvvTarjeta.value != "" &&
    fechaDeVencimientoTarjeta.value != "" &&
    nombresTitularTarjeta.value != "" &&
    apellidosTitularTarjeta.value != ""
  ) {
    let nuevaTarjeta = new Tarjeta(
      numeroTarjeta.value,
      cvvTarjeta.value,
      fechaDeVencimientoTarjeta.value,
      nombresTitularTarjeta.value,
      apellidosTitularTarjeta.value
    );
    let indiceUsuario = localStorage.getItem("indiceUsuarioIniciadoSesion");
    ejecutarCompra(indiceUsuario, nuevaTarjeta);
  } else {
    addCreditCardModal.hide();
    mostrarModal("mensajeFormularioTarjetaIncompleto");
  }
});
function agregarTarjeta(indiceUsuario, nuevaTarjeta) {
  let usuarios = getArregloLocalStorage("usuarios");
  usuarios[indiceUsuario].tarjeta = nuevaTarjeta;
  setArregloLocalStorage("usuarios", usuarios);
}
function ejecutarCompra(indiceUsuario, nuevaTarjeta) {
  agregarTarjeta(indiceUsuario, nuevaTarjeta);
  resetearFormularioTarjeta();
  addCreditCardModal.hide();
  let itemsCarrito = getArregloLocalStorage("itemsCarrito");
  let usuarios = getArregloLocalStorage("usuarios");
  let nuevaCuenta;
  for (let itemCarrito of itemsCarrito) {
    nuevaCuenta = new Cuenta(
      itemCarrito.plataforma,
      usuarios[indiceUsuario].correo,
      usuarios[indiceUsuario].contrasenia,
      new Date().toLocaleDateString(),
      itemCarrito.tiempoDuracion,
      usuarios[indiceUsuario].dni
    );
    addArregloLocalStorage("cuentas", nuevaCuenta);
  }
  mostrarModal("mensajeConfirmacionCompra");
  localStorage.setItem("itemsCarrito", "[]");
  let itemsCarritoContenedor = document.getElementById(
    "itemsCarritoContenedor"
  );
  itemsCarritoContenedor.innerText = "";
  actualizarTotalItemsCarrito();
}
function resetearFormularioTarjeta() {
  let numeroTarjeta = document.getElementById("numero-tarjeta");
  let cvvTarjeta = document.getElementById("cvv-tarjeta");
  let fechaDeVencimientoTarjeta = document.getElementById(
    "fecha-vencimiento-tarjeta"
  );
  let nombresTitularTarjeta = document.getElementById(
    "nombres-titular-tarjeta"
  );
  let apellidosTitularTarjeta = document.getElementById(
    "apellidos-titular-tarjeta"
  );
  numeroTarjeta.value = "";
  cvvTarjeta.value = "";
  fechaDeVencimientoTarjeta.value = "";
  nombresTitularTarjeta.value = "";
  apellidosTitularTarjeta.value = "";
}
let cerrarSesionButton = document.getElementById("cerrarSesionButton");
cerrarSesionButton.addEventListener("click", function () {
  localStorage.removeItem("indiceUsuarioIniciadoSesion");
  localStorage.removeItem("itemsCarrito");
  localStorage.setItem("proximoIdItemCarrito", "0");
});
