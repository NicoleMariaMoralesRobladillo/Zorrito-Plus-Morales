fetch(
  "https://nicolemariamoralesrobladillo.github.io/Zorrito-Plus-Morales/json/plataformas.json"
)
  .then((response) => response.json()) //parametro => retorno
  .then(function (data) {
    let cardsPlataformasBox = document.getElementById("cardsPlataformasBox");
    let plataformas = data;
    cardsPlataformasBox.innerText = "";
    for (let plataforma of plataformas) {
      let divCard = document.createElement("div");
      let clasesDivCard = [
        "col-12",
        "col-sm-6",
        "col-lg-4",
        "d-flex",
        "justify-content-center",
        "mt-5",
      ];
      divCard.classList.add(...clasesDivCard);
      divCard.innerHTML = `
      <div
        class="streamingCard d-flex flex-column justify-items-center align-items-center streamingCard--${plataforma.idPlataforma} p-3"
      >
        <div class="p-2 m-3 bg-black">
          <img
            src="../../images/${plataforma.idPlataforma}-logo.png"
            alt="Logo de ${plataforma.plataforma}"
            class="img-fluid"
          />
        </div>
        <p
          class="text-white fs-4 text-center py-2 lh-lg my-0 mx-3 text-break"
        >
          A solo
          <br />
          S/. ${plataforma.precio} Al mes
        </p>
        <div
          class="streamingCard__buttons d-flex flex-column align-items-center flex-md-row align-items-md-stretch flex-nowrap justify-content-center mx-3 my-2"
        >
          <button
            id="streamingCard__buttons__cart--${plataforma.idPlataforma}"
            class="streamingCard__buttons__cart button text-white fs-5 text-center lh-base border-0 px-3 py-2 rounded-4 w-100 my-2 bg-black me-0 me-md-1"
          >
            <i class="fa-solid fa-cart-plus my-2"></i>
          </button>
          <div
            class="streamingCard__buttons__months d-flex flex-row flex-nowrap my-2 justify-content-center position-static ms-0 ms-md-1"
          >
            <div
              class="streamingCard__buttons__months__text px-3 py-2 rounded-start-4 rounded-end-0 bg-black text-white border-0 d-flex align-items-center text-break"
            >
              Meses
            </div>
            <input
              type="number"
              value="1"
              name="meses-pago-${plataforma.idPlataforma}"
              id="meses-pago-${plataforma.idPlataforma}"
              class="streamingCard__buttons__months__input px-3 py-2 rounded-start-0 rounded-end-4 border-0 flex-fill text-break"
            />
          </div>
        </div>
      </div>
      `;
      cardsPlataformasBox.append(divCard);
      let botonComprar = document.getElementById(
        `streamingCard__buttons__cart--${plataforma.idPlataforma}`
      );
      botonComprar.addEventListener("click", function () {
        let tiempoDuracion = document.getElementById(
          `meses-pago-${plataforma.idPlataforma}`
        ).value;
        regularizarDatosLocalStorage();
        let nuevoItemCarrito = new ItemCarrito(
          plataforma.plataforma,
          parseInt(tiempoDuracion),
          plataforma.precio,
          plataforma.idPlataforma
        );
        agregarItemCarrito(nuevoItemCarrito);
        insertarDivItemCarrito(nuevoItemCarrito);
        actualizarTotalItemsCarrito();
        Toastify({
          text:
            plataforma.plataforma +
            " por " +
            tiempoDuracion +
            " mes(es) " +
            "se ha añadido correctamente al carrito.",
          close: false,
          duration: 2000,
          gravity: "top",
          position: "right",
          style: {
            background: "white",
            color: "black",
          },
        }).showToast();
      });
    }
  });
