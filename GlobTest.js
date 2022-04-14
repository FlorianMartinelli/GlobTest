/*
 * QUESTION 1 
 * 
 * foo() est une fonction qui permet d'ordonner un tableau d'intervalle ainsi que de fusionner les potentiels intervalles qui se chevauchent.
 * Un intervalle est représenté ici par un tableau contenant deux valeurs, la première étant inférieure à la seconde.
 */


/* QUESTION 2 */

const foo = intervalsArray => {
  let intervalTemp = null;
  
  // On trie les intervalles en fonction de la première valeur
  const sortedIntervals = intervalsArray.sort((a, b) => {
    return a[0] - b[0];
  });
  
  // On filtre ensuite les intervalles, fusionnant tous ceux qui se chevauchent avant de les retourner
  return sortedIntervals.filter(interval => {
    if(intervalTemp === null || interval[0] > intervalTemp[1]) {
      intervalTemp = interval;
    
      return intervalTemp;

    } else if(interval[1] > intervalTemp[1]){
      intervalTemp[1] = interval[1]
    }
  });
}

console.log(foo([[0, 3], [6, 10]]));
console.log(foo([[0, 5], [3, 10]]));
console.log(foo([[7, 8], [3, 6], [2, 4]]));
console.log(foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]));

/* 
 * QUESTION 3 
 *
 * Cette fonction a été implémentée en une heure
 */