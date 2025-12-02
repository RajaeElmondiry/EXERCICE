
const personnes = [ 
  { nom: "Rami", age: 33, membre: true }, 
  { nom: "Fatihi", age: 24, membre: false }, 
  { nom: "Chakib", age: 45, membre: true }, 
  { nom: "Mounir", age: 37, membre: false }
];

let nomsMembres = [];

for (let i = 0; i < personnes.length; i++) {
  if (personnes[i].membre) {
    nomsMembres.push(personnes[i].nom);
  }
}


console.log(nomsMembres); // ["Rami", "Chakib"]