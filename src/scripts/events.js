const events = [
  {
    img: "imagens/ev3.jpg",
    title: "Show CASSOL e depois DP CLAN",
    description:
      "Data: 7 junho<br> Neste sábado, 07/06, a partir das 20h, cola com a gente pra um role inesquecivel,pela primeira vez na casa o artista de Curitiba Cassol ira colar com a gente fazer historia na casa.",
  },
  {
    img: "imagens/ev1.jpg",
    title: "Show DP CLAN",
    description:
      "Data: 24 de Maio<br> Neste sábado, 24/05, a partir das 20h, cola com a gente pra uma noite pesada de rap, rock e freestyle como tem que ser! 💣🎤🎸",
  },
  {
    img: "imagens/ev2.jpg",
    title: "Rolê de HIP-HOP",
    description:
      "Data: 10 de Maio<br>O rolê mais Hip Hop da cidade! A partir das 20hrs teremos a nossa primeira edição do Groovy Session com os Djs Baqueta e Traumatopia fazendo aquela somzera que só o groovy proporciona! Então já sabe, seu rolê hoje tem hora e local marcado. ",
  },
];

const onClickEvent = (event) => {
  console.log("Event clicked:", event.currentTarget);
  const element = event.currentTarget;
  if (element.classList.contains("focus")) {
    element.classList.remove("focus");
  } else {
    element.classList.add("focus");
  }
};

function displayEvents() {
  const eventContainer = document.getElementById("eventos-lista");
  console.log("Displaying events...");
  if (!eventContainer) {
    console.error("Event container not found!");
    const eventElement = document.createElement("div");

    const errorMessage = document.createElement("p");

    errorMessage.textContent =
      "Erro ao carregar os eventos. Tente novamente mais tarde.";
    errorMessage.style.color = "red";
    eventElement.appendChild(errorMessage);
    document.body.appendChild(eventElement);
    return;
  } else {
    events.forEach((event, i) => {
      const eventElement = document.createElement("div");
      eventElement.classList.add("evento");

      const img = document.createElement("img");
      img.src = event.img;
      img.alt = event.title;

      const title = document.createElement("h3");
      title.textContent = event.title;

      const description = document.createElement("p");
      description.innerHTML = event.description;

      eventElement.appendChild(img);
      eventElement.appendChild(title);
      eventElement.appendChild(description);
      eventElement.id = i;
      eventElement.onclick = (e) => onClickEvent(e);

      eventContainer.appendChild(eventElement);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayEvents();
});
