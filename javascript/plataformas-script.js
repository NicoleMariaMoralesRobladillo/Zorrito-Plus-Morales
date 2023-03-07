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
let streamingCard__buttons__cart = document.getElementsByClassName(
  "streamingCard__buttons__cart"
);
function regularizarDatosLocalStorage() {
  let proximoIdItemCarrito = localStorage.getItem("proximoIdItemCarrito");
  let proximoIdItemCarritoValor;
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  let itemsCarritoAlmacenados = JSON.parse(itemsCarritoAlmacenadosJSON);
  if (itemsCarritoAlmacenadosJSON == null) {
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
Array.from(streamingCard__buttons__cart).forEach(function (element) {
  element.addEventListener("click", function () {
    let idPlataforma = element.id;
    let idTiempoDuracion;
    let plataforma, tiempoDuracion;
    if (idPlataforma == "streamingCard__buttons__cart--netflix") {
      plataforma = "Netflix";
      idTiempoDuracion = "meses-pago-netflix";
    } else if (idPlataforma == "streamingCard__buttons__cart--movistar-play") {
      plataforma = "Movistar Play";
      idTiempoDuracion = "meses-pago-movistar-play";
    } else if (idPlataforma == "streamingCard__buttons__cart--disney-plus") {
      plataforma = "Disney Plus";
      idTiempoDuracion = "meses-pago-disney-plus";
    } else if (idPlataforma == "streamingCard__buttons__cart--star-plus") {
      plataforma = "Star Plus";
      idTiempoDuracion = "meses-pago-star-plus";
    } else if (idPlataforma == "streamingCard__buttons__cart--HBO-max") {
      plataforma = "HBO Max";
      idTiempoDuracion = "meses-pago-HBO-max";
    } else if (idPlataforma == "streamingCard__buttons__cart--prime-video") {
      plataforma = "Prime Video";
      idTiempoDuracion = "meses-pago-prime-video";
    } else if (idPlataforma == "streamingCard__buttons__cart--spotify") {
      plataforma = "Spotify";
      idTiempoDuracion = "meses-pago-spotify";
    }
    tiempoDuracion = document.getElementById(idTiempoDuracion);
    regularizarDatosLocalStorage();
    let nuevoItemCarrito = new ItemCarrito(
      plataforma,
      parseInt(tiempoDuracion.value)
    );
    agregarItemCarrito(nuevoItemCarrito);
    insertarDivItemCarrito(nuevoItemCarrito);
    actualizarTotalItemsCarrito();
    mostrarModal("mensajeConfirmacionAddCart");
  });
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
  itemsCarritoContenedor.append(divItemCarrito);
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
