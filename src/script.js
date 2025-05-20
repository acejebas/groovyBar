function Zoom() {
  const Fotos = document.getElementById("imagem1");
  Fotos.className = "polaroid zoom";
  const icones = document.getElementById("setas");
  icones.style.display = "block";
}

function ZoomOut() {
  const zoom = document.querySelector(".zoom");
  const element = document.getElementById(zoom.id);
  element.classList.remove("zoom");
  const icones = document.getElementById("setas");
  icones.style.display = "none";
}

var imageIndex = 1;

function esquerda() {
  const zoomElement = document.querySelectorAll(".zoom");
  zoomElement.forEach((element) => {
    element.classList.remove("zoom");
  });
  if (imageIndex === 1) {
    imageIndex = 4;
    document.getElementById(`imagem${imageIndex}`).className = "polaroid zoom";
  } else {
    imageIndex--;
    document.getElementById(`imagem${imageIndex}`).className = "polaroid zoom";
  }
}

function direita() {
    const zoomElement = document.querySelectorAll(".zoom");
    zoomElement.forEach((element) => {
      element.classList.remove("zoom");
    });
  if (imageIndex === 4 && zoomElement) {
    imageIndex = 1;
    document.getElementById(`imagem${imageIndex}`).className = "polaroid zoom";
  } else {
    imageIndex++;
    document.getElementById(`imagem${imageIndex}`).className = "polaroid zoom";
  }
}
