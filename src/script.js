const slidesDrdz = [
  // {
  //   imagem: "e1.jpg",
  //   titulo: "Estúdio do Prod.Drdz",
  //   descricao: "O Estúdio Prod.Drdz é onde batidas nascem. Com equipamentos profissionais, o espaço é voltado à produção musical independente, gravações, ensaios e colaborações artísticas."
  // },
  {
    imagem: "e2.jpg",
    titulo: "Sala de Gravação",
    descricao: "Equipado para gravações vocais e instrumentais, com isolamento acústico e qualidade profissional. Um espaço confortável para soltar sua melhor performance."
  },
  {
    imagem: "e3.jpg",
    titulo: "Espaço Criativo",
    descricao: `Aqui é onde a mágica acontece, onde a ideia vira som e o som vira história. No nosso estúdio, a parada é séria: Rola gravação de voz, instrumentos, mixagem, masterização e criação de beats exclusivos.

    A gente vive e respira rap, mas não fecha porta pra nenhum som. Seja trap, funk, R&B, reggae, 	rock ou qualquer outro corre, o foco é deixar sua música do jeito que você sempre sonhou — profissional, com identidade e peso. 
    
    O estúdio tem aquele clima chave, confortável, com tudo no esquema pra você se sentir à vontade e soltar sua melhor versão no mic ou na produção. Se tá querendo tirar seu som do papel e botar na pista com qualidade, já sabe… cola com nóis e vamo fazer acontecer!`
  },
  {
  imagem: "e4.jpg",
  titulo: "Estúdio do Prod.Drdz",
  descricao: "Aqui é onde a mágica acontece. Um estúdio completo para dar vida à sua arte com liberdade e qualidade sonora."
  }
];

let indexDrdz = 0;

function mudarSlide(direcao) {
  indexDrdz += direcao;

  if (indexDrdz < 0) indexDrdz = slidesDrdz.length - 1;
  else if (indexDrdz >= slidesDrdz.length) indexDrdz = 0;

  const slide = slidesDrdz[indexDrdz];
  document.getElementById("imagem-drdz").src = `./src/imagens/${slide.imagem}`;
  document.getElementById("titulo-drdz").innerText = slide.titulo;
  document.getElementById("descricao-drdz").innerText = slide.descricao;
}
