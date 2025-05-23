const slidesDrdz = [
  {
    imagem: "e1.jpg",
    titulo: "Estúdio do Prod.Drdz",
    descricao: "O Estúdio Prod.Drdz é onde batidas nascem. Com equipamentos profissionais, o espaço é voltado à produção musical independente, gravações, ensaios e colaborações artísticas."
  },
  {
    imagem: "e2.jpg",
    titulo: "Sala de Gravação",
    descricao: "Equipado para gravações vocais e instrumentais, com tratamento acústico e qualidade profissional. Um espaço confortável para soltar sua melhor performance."
  },
  {
    imagem: "e3.jpg",
    titulo: "Espaço Criativo",
    descricao: `Aqui é onde a mágica acontece, onde a ideia vira som e o som vira história. No nosso estúdio, a parada é séria: Rola gravação de voz, instrumentos, mixagem, masterização e criação de beats exclusivos.

    A gente vive e respira rap, mas não fecha porta pra nenhum som. Seja trap, funk, R&B, reggae, 	rock ou qualquer outro corre, o foco é deixar sua música do jeito que você sempre sonhou — profissional, com identidade e peso. 
    
    O estúdio tem aquele clima chave, confortável, com tudo no esquema pra você se sentir à vontade e soltar sua melhor versão no mic ou na produção. Se tá querendo tirar seu som do papel e botar na pista com qualidade, já sabe… cola com nóis e vamo fazer acontecer!`
  },
];

  const slidesBar = [
    {
    imagem: "b1.jpg",
    titulo: "Entrada do Bar",
    descricao: "A entrada do bar é o primeiro passo para uma experiência única. Com um design acolhedor e convidativo, é o lugar perfeito para começar a noite."
  },
  {
    imagem: "b2.jpg",
    titulo: "Bar",
    descricao: "O bar é o coração do nosso espaço, onde você pode relaxar e desfrutar de uma variedade de bebidas. Nossa equipe está pronta para servir os melhores drinks da cidade."
  },
  {
    imagem: "b3.jpg",
    titulo: "Espaço do Bar",
    descricao: `O espaço do bar é projetado para proporcionar conforto e descontração. Com uma decoração única e um ambiente acolhedor, é o lugar ideal para se reunir com amigos e curtir a noite.`
  }]

const slidesTatoo = [
  {
  imagem: "t1.jpg",
  titulo: "Estúdio de Tatuagem",
  descricao: "O estúdio de tatuagem é um espaço dedicado à arte corporal. Com profissionais experientes, garantimos qualidade e segurança em cada traço."
},
{
  imagem: "t2.jpg",
  titulo: "Tatuagens Personalizadas",
  descricao: "Oferecemos tatuagens personalizadas, feitas sob medida para você. Cada desenho é único e reflete a sua personalidade."
},
{
  imagem: "t3.jpg",
  titulo: "Ambiente Aconchegante",
  descricao: `Nosso estúdio proporciona um ambiente aconchegante e acolhedor, onde você pode relaxar enquanto transforma suas ideias em arte na pele.`
}];

let indexDrdz = 0;
let indexBar = 0;
let indexTatoo = 0;


function mudarSlide(direcao, tipo) {
  if (tipo === "bar") {
    indexBar += direcao;
    if (indexBar < 0) indexBar = slidesBar.length - 1;
    else if (indexBar >= slidesBar.length) indexBar = 0;

    const slide = slidesBar[indexBar];
    document.getElementById("imagem-bar").src = `./src/imagens/${slide.imagem}`;
    document.getElementById("titulo-bar").innerText = slide.titulo;
    document.getElementById("descricao-bar").innerText = slide.descricao;
 } else if (tipo === "estudio") {
   indexDrdz += direcao;
    if (indexDrdz < 0) indexDrdz = slidesDrdz.length - 1;
  else if (indexDrdz >= slidesDrdz.length) indexDrdz = 0;

  const slide = slidesDrdz[indexDrdz];
  document.getElementById("imagem-drdz").src = `./src/imagens/${slide.imagem}`;
  document.getElementById("titulo-drdz").innerText = slide.titulo;
  document.getElementById("descricao-drdz").innerText = slide.descricao;
 } else if (tipo === "tatoo") {
    indexTatoo += direcao;
    if (indexTatoo < 0) indexTatoo = slidesTatoo.length - 1;
    else if (indexTatoo >= slidesTatoo.length) indexTatoo = 0;

    const slide = slidesTatoo[indexTatoo];
    document.getElementById("imagem-tatoo").src = `./src/imagens/${slide.imagem}`;
    document.getElementById("titulo-tatoo").innerText = slide.titulo;
    document.getElementById("descricao-tatoo").innerText = slide.descricao;
 }
}
