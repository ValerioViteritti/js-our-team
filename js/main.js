

// MILESTONE 1:

// MILESTONE 2:

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const membriTeam = [
  {
    nome: 'Wayne Barrett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
      nome: 'Angela Carroll',
      ruolo: 'Chief Editor',
      foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
  {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'barbara-ramos-graphic-designer.jpg',
  },
];

// membriTeam.forEach((element) => {
//   console.log(element.nome, element.ruolo);
// });


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamContainer = document.getElementById('team-container');

membriTeam.forEach((element) => {
  const nomeMembro = `${element.nome}`;
  const ruoloMembro = `${element.ruolo}`;
  const fotoMembro = `${element.foto}`;
  const nomeElement = document.createElement('h2');
  const ruoloElement = document.createElement('span');
  const fotoElement = document.createElement('span');
  nomeElement.textContent = nomeMembro;
  ruoloElement.textContent = ruoloMembro;
  fotoElement.textContent = fotoMembro;
  teamContainer.appendChild(nomeElement);
  teamContainer.appendChild(ruoloElement);
  teamContainer.appendChild(fotoElement);

  console.log(nomeMembro);
  console.log(ruoloMembro);
  console.log(fotoMembro);
});
