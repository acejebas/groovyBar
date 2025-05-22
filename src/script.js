const slidesDrdz = [
  {
    imagem: "imagens/estudio1.jpg",
    titulo: "Estúdio do Prod.Drdz",
    descricao: "O Estúdio Prod.Drdz é onde batidas nascem. Com equipamentos profissionais, o espaço é voltado à produção musical independente, gravações, ensaios e colaborações artísticas."
  },
  {
    imagem: "imagens/estudio2.jpg",
    titulo: "Sala de Gravação",
    descricao: "Equipado para gravações vocais e instrumentais, com isolamento acústico e qualidade profissional. Um espaço confortável para soltar sua melhor performance."
  },
  {
    imagem: "imagens/estudio3.jpg",
    titulo: "Espaço Criativo",
    descricao: "Aqui é onde a mágica acontece. Um estúdio completo para dar vida à sua arte com liberdade e qualidade sonora."
  }
];

let indexDrdz = 0;

function mudarSlide(direcao) {
  indexDrdz += direcao;

  if (indexDrdz < 0) indexDrdz = slidesDrdz.length - 1;
  else if (indexDrdz >= slidesDrdz.length) indexDrdz = 0;

  const slide = slidesDrdz[indexDrdz];
  document.getElementById("imagem-drdz").src = slide.imagem;
  document.getElementById("titulo-drdz").innerText = slide.titulo;
  document.getElementById("descricao-drdz").innerText = slide.descricao;
}
