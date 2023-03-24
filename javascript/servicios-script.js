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
        "col-md-4",
        "col-lg-3",
        "d-flex",
        "justify-content-center",
        "p-4",
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
        <p class="text-white fs-5 text-center py-2 lh-lg m-0 text-break">
            A solo
            <br />
            <span class="fs-2 text-break">S/. ${plataforma.precio}</span>
            <br />
            Al mes
        </p>
        </div>
      `;
      cardsPlataformasBox.append(divCard);
    }
  });
