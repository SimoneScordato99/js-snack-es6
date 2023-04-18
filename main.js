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

let risultati = squadre.map((element) => {
    return element = {nome: element.nome, punti: random(), falli: random()}
})
let { nome , falli} = risultati
console.log(risultati)

let menoRisultati = risultati.map((element) => {
    return element = {nome: element.nome, falli: element.falli}
})
console.log(menoRisultati)




/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.


dato un array e due numeri, restituire un array con tutti gli elementi tra gli estremi (estremi esclusi)
cioè dato [a,b,c,d,e] e i numeri 1 4
restituirò [c,d], perchè c e d hanno indice 2 e 3 (compresi tra 1 e 4)
la gabola è l'usare la filter
*/

let array = [
    'gennaio',
    'febbraio',
    'marzo',
    'aprile',
    'maggio',
    'giugno',
    'luglio',
    'agosto',
    'settembre',
    'ottobre',
    'novembre',
    'dicembre'
]
let min = 3;
let max = 7;
console.log( array )

let arrayNuovo = array.filter((element,index) => {
    if(index > min && index < max ){
        return element
    } 
})
console.log(arrayNuovo)
