function actualizarMisCuentas() {
  let cuentas = getArregloLocalStorage("cuentas");
  let usuarios = getArregloLocalStorage("usuarios");
  let indiceUsuarioIniciadoSesion = this.localStorage.getItem(
    "indiceUsuarioIniciadoSesion"
  );
  if (cuentas != null) {
    cuentas = cuentas.filter(
      (cuenta) => cuenta.dni == usuarios[indiceUsuarioIniciadoSesion].dni
    );
    let divCuentaContenedor = document.getElementById("divCuentaContenedor");
    divCuentaContenedor.innerText = "";
    for (let cuenta of cuentas) {
      let divCuenta = document.createElement("div");
      let clasesDivCuenta = ["bg-dark", "p-5", "my-5"];
      divCuenta.classList.add(...clasesDivCuenta);
      divCuenta.innerHTML = `
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
        >
          <div class="text-center icono--12">
            <img
              src="../../images/user.png"
              alt="Foto de perfil"
              class="w-100 pb-2"
            />
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-8 d-flex align-items-center">
          <div class="w-100">
            <div class="row">
              <div
                class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white text-break"
              >
                Plataforma:
              </div>
              <div
                class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto text-break"
              >
                ${cuenta.plataforma}
              </div>
            </div>
            <div class="row">
              <div
                class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white text-break"
              >
                Correo:
              </div>
              <div
                class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
              >
                ${cuenta.correo}
              </div>
            </div>
            <div class="row">
              <div
                class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white text-break"
              >
                Contraseña:
              </div>
              <div
                class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto text-break"
              >
                ${cuenta.contrasenia}
              </div>
            </div>
            <div class="row">
              <div
                class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white text-break"
              >
                Fecha de inicio:
              </div>
              <div
                class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto text-break"
              >
                ${cuenta.fechaInicio}
              </div>
            </div>
            <div class="row">
              <div
                class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white text-break"
              >
                Tiempo de duración (en meses):
              </div>
              <div
                class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto text-break"
              >
                ${cuenta.tiempoDuracion}
              </div>
            </div>
          </div>
        </div>
      </div>`;
      divCuentaContenedor.append(divCuenta);
    }
  }
}
window.addEventListener("load", function () {
  actualizarMisCuentas();
});
