let streamingCard__buttons__cart = document.getElementsByClassName(
  "streamingCard__buttons__cart"
);
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
