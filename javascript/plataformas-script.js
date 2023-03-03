class ItemCarrito {
  constructor(plataforma, tiempoDuracion) {
    this.plataforma = plataforma;
    if (plataforma == "Netflix") {
      this.precio = 12;
    } else if (plataforma == "Movistar Play") {
      this.precio = 5;
    } else if (plataforma == "Disney Plus") {
      this.precio = 7;
    } else if (plataforma == "Star Plus") {
      this.precio = 7;
    } else if (plataforma == "HBO Max") {
      this.precio = 8;
    } else if (plataforma == "Prime Video") {
      this.precio = 7;
    } else if (plataforma == "Spotify") {
      this.precio = 7;
    }
    this.tiempoDuracion = tiempoDuracion;
    this.total = tiempoDuracion * this.precio;
  }
}
let streamingCard__buttons__cart = document.getElementsByClassName(
  "streamingCard__buttons__cart"
);
streamingCard__buttons__cart.addEventListener("click", function () {
  agregarItemCarrito();
});
function agregarItemCarrito() {
  let itemsCarrito = [];
  let idPlataforma = streamingCard__buttons__cart.id;
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
  tiempoDuracion = document.getElementById(idTiempoDuracion).value;
  let nuevoItemCarrito = new ItemCarrito(plataforma, parseInt(tiempoDuracion));
  let itemsCarritoAlmacenadosJSON = localStorage.getItem("itemsCarrito");
  if (itemsCarritoAlmacenadosJSON != null) {
    itemsCarrito = JSON.parse(itemsCarritoAlmacenadosJSON);
  }
  itemsCarrito.push(nuevoItemCarrito);
  let itemsCarritoJSON = JSON.stringify(itemsCarrito);
  localStorage.setItem("itemsCarrito", itemsCarritoJSON);
}
