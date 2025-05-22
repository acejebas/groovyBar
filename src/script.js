const slidesDrdz = [
  {
    imagem: "imagem/estudio1.jpg",
    titulo: "Estúdio do Prod.Drdz",
    descricao: "O Estúdio Prod.Drdz é onde batidas nascem. Com equipamentos profissionais, o espaço é voltado à produção musical independente, gravações, ensaios e colaborações artísticas. Aberto a artistas locais e a novos talentos que buscam espaço para criar com liberdade."
  },
  {
    imagem: "imagens/estudio2.jpg",
    titulo: "Sala de Gravação",
    descricao: "Equipado para gravações vocais e instrumentais, com isolamento acústico e qualidade profissional. Um espaço confortável para soltar sua melhor performance."
  },
  {
    imagem: "imagens/estudio3.jpg",
    titulo: "Espaço Criativo",
    descricao: `
      Aqui é onde a mágica acontece, onde a ideia vira som e o som vira história. No nosso estúdio, a parada é séria: rola gravação de voz, instrumentos, mixagem, masterização e criação de beats exclusivos.<br><br>
      A gente vive e respira rap, mas não fecha porta pra nenhum som. Seja trap, funk, R&B, reggae, rock ou qualquer outro corre, o foco é deixar sua música do jeito que você sempre sonhou — profissional, com identidade e peso.<br><br>
      O estúdio tem aquele clima chave, confortável, com tudo no esquema pra você se sentir à vontade e soltar sua melhor versão no mic ou na produção.<br><br>
      Se tá querendo tirar seu som do papel e botar na pista com qualidade, já sabe… <strong>cola com nóis e vamo fazer acontecer!</strong>
    `
  }
];

let indexDrdz = 0;

function mudarSlide(direcao) {
  indexDrdz += direcao;

  if (indexDrdz < 0) {
    indexDrdz = slidesDrdz.length - 1;
  } else if (indexDrdz >= slidesDrdz.length) {
    indexDrdz = 0;
  }

  const slide = slidesDrdz[indexDrdz];
  document.getElementById("imagem-drdz").src = slide.imagem;
  document.getElementById("titulo-drdz").innerText = slide.titulo;
  document.getElementById("descricao-drdz").innerHTML = slide.descricao;
}
