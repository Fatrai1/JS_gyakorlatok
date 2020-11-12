'use strict';
//1. Irasd ki egy tetszőleges számú.... legkisebb elemét//

const numericArray = [21, 31, 13, 2, 58, 83, 79, 11, 3, 1, 47];


let smallest = numericArray[0];
for (let i = 0; i<numericArray.length; i++) {
if (numericArray[i]<smallest) {
smallest = numericArray[i];
    }
}
console.log(smallest)

//2. Irasd ki egy tetszőleges számú.... legnagyobb elemét//

let largest = numericArray[0];
for (let i = 0; i<numericArray.length; i++) {
if (numericArray[i]>largest) {
largest = numericArray[i];
    }
}
console.log(largest)

//3. Irasd ki egy tetszőleges számú.... átlagát//

let sum = 0;					
for (let i = 0; i < numericArray.length; i++) {
 sum += numericArray[i];
}
let average = sum / 2;	

console.log(average);

//4. Irasd ki egy tetszőleges számú.... összegét.//

        let sum1 = 0;					
        for (let i = 0; i < numericArray.length; i++) {
         sum1 += numericArray[i];
        }
        console.log('4. '+ sum1);


//5. Irasd ki egy tetszőleges számú.... páros elemeinek a számát.//


    let paros = 0;
    for (let i = 0; i < numericArray.length; i++) {
        if (numericArray[i] % 2 == 0) {
            paros += 1;
        }
    }
console.log('5. ' + paros)

//6. Irasd ki egy tetszőleges számú.... második legkisebb elemét//

const minimumIndex = numericArray => {
    return numericArray.indexOf(Math.min(...numericArray));
 };
 const secondMinimum = numericArray => {
    const copy = numericArray.slice();
    copy.splice(minimumIndex(copy), 1);
    return copy[minimumIndex(copy)];
 };
 console.log(secondMinimum(numericArray));


//7. Irasd ki egy tetszőleges számú.... harmadik legnagyobb elemét//

function bubble_Sort(numericArray) {
    let swapp;
    let n = numericArray.length-1;
    
    do {
        swapp = false;
        for (let i=0; i < n; i++)
        {
            if (numericArray[i] < numericArray[i+1])
            {
               let temp = numericArray[i];
               numericArray[i] = numericArray[i +1];
               numericArray[i + 1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return numericArray; 
}
console.log(bubble_Sort(numericArray));
console.log(bubble_Sort(numericArray[2]));

//8. Irasd ki egy tetszőleges számú.... tartalmaz e 23-as számot//
function find23(numericArray, find) {  
    let find = 23;
    let found = false;
    for (let i = 0; i < numericArray.length && found == false; i++) {	 
      if (numericArray[i] === find) {				
        found = true;					
      }
    }
}
console.log(found);


// 9.Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! 
// Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!






// Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

// Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

// Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

// Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
// Írasd ki a rendezett tömböt!

// Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

// Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!

// Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!