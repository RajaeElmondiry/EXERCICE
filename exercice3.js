// Étudiants et leurs notes
const etudiants = [
  { nom: 'Rami', algorithme: 15, poo: 17 },
  { nom: 'Kamali', algorithme: 16, poo: 14 },
  { nom: 'Fahmi', algorithme: 13, poo: 16 },
  { nom: 'Chaouki', algorithme: 18, poo: 15 }
];

// Calculer la moyenne de chaque étudiant
etudiants.forEach(etudiant => {
  etudiant.moyenne = (etudiant.algorithme + etudiant.poo) / 2;
});

// Afficher les résultats
etudiants.forEach(etudiant => {
  console.log(`${etudiant.nom} : ${etudiant.moyenne}/20`);
});

// Trouver la meilleure moyenne
const meilleur = etudiants.reduce((max, etudiant) => 
  etudiant.moyenne > max.moyenne ? etudiant : max
);

console.log(`\nMeilleur étudiant : ${meilleur.nom} avec ${meilleur.moyenne}/20`);