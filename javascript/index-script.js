fetch("../json/plataformas.json")
  .then((response) => response.json()) //parametro => retorno
  .then(function (data) {
    let iconosPlataformasBox = document.getElementById("iconosPlataformasBox");
    let plataformas = data;
    iconosPlataformasBox.innerText = "";
    for (let plataforma of plataformas) {
      let divIcono = document.createElement("div");
      let clasesDivIcono = [
        "p-2",
        "m-3",
        "icono",
        "icono--8",
        `icono--${plataforma.idPlataforma}`,
        "bg-black",
      ];
      divIcono.classList.add(...clasesDivIcono);
      divIcono.innerHTML = `<img src="./images/${plataforma.idPlataforma}-logo.png" alt="Logo de ${plataforma.plataforma}" class="img-fluid"/>`;
      iconosPlataformasBox.append(divIcono);
    }
  });
