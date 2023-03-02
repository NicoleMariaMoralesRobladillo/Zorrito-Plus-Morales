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
