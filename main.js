const body = document.querySelector("body");
let droite = document.querySelector("#d");
let gauche = document.querySelector("#g");
let fin;

const db = [
  {
    name: "chat",
    url: "chat.webp",
    alt: "chat brun",
    date: "02/08/23",
  },

  {
    name: "chien",
    url: "chien.jpg",
    alt: "chien brun",
    date: "20/04/23",
  },

  {
    name: "gecko",
    url: "leopard.jpg",
    alt: "gecko tacheté léopard",
    date: "12/12/12",
  }
];

const div = document.createElement("div");

function changeImg(i) {
  div.innerHTML = `
  <h1>${db[i].name}</h1>
  <img src="${db[i].url}" class="tous" alt="${db[i].alt}">
  <p>${db[i].date}</p>
  `;
}

let counter = 0;
changeImg(counter);
body.appendChild(div);

droite.addEventListener("click", () => {
  clearInterval(fin);
  counter++;
  if (counter === db.length) {
    counter = 0;
  }
  fin = setInterval(() => {
    counter++;
    if (counter === db.length) {
      counter = 0;
    }
    changeImg(counter);
  }, 5000);
  changeImg(counter);
});

gauche.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = db.length - 1;
  }
  changeImg(counter);
});

fin = setInterval(() => {
  counter++;
  if (counter === db.length) {
    counter = 0;
  }
  changeImg(counter);
}, 1000);
