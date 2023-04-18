/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
let biciclette = [
    { nome: 'bici-rossa', peso: 25 },
    { nome: 'bici-bianca', peso: 15 },
    { nome: 'bici-nera', peso: 13 },
    { nome: 'bici-gialla', peso: 21 },
    { nome: 'bici-verde', peso: 23 },
    { nome: 'bici-rosa', peso: 12 },
    { nome: 'bici-magenta', peso: 7 },
    { nome: 'bici-marrone', peso: 28 },
    { nome: 'bici-amaranto', peso: 33 }, 
]

// let [ciao, belli, ...terzo] = biciclette;
// console.log(ciao, belli, terzo)

// biciclette.forEach((element, index) => {
//     const {nome , peso} = element;
//     console.log(peso ,nome)

//     let min 

//     if(peso[0] < peso){
//         console.log(element.peso[index]) 
//     } else{
//         console.log('maiale')
//     }
// }) 
let nomeBiciMinore = biciclette[0].nome;
let pesoMinore = biciclette[0].peso;
for (const bicicletta of biciclette) {
    const {nome , peso} = bicicletta;
    if(peso < pesoMinore){
        pesoMinore = peso
        nomeBiciMinore = nome;
        console.log(pesoMinore)
        console.log(nomeBiciMinore)
    }
}
console.log(`la ${nomeBiciMinore}, che pesa ${pesoMinore}kg, è quella che pesa di meno`)

/* let pesoMinore = biciclette[0].peso;
for (let i = 0; i < biciclette.length; i++) {
    if(biciclette[i].peso < pesoMinore ){
        pesoMinore = biciclette[i].peso
    }
    
}
 */
// let indexMinore = 0;
// for (let i = 0; i < biciclette.length; i++) {
//     if(biciclette[i].peso < biciclette[indexMinore].peso ){
//         indexMinore = i;
//     }
    
// }
// biciclette[indexMinore]





/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

let squadre = [
    { nome: 'juventus', punti: 0 , falli: 0 },
    { nome: 'inter', punti: 0 , falli: 0 },
    { nome: 'milan', punti: 0 , falli: 0 },
    { nome: 'palermo', punti: 0 , falli: 0 },
]
console.log(squadre)
function random(){
    return Math.floor(Math.random() * 100) +1;
}
console.log(random())
