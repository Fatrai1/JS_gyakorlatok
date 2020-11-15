'use strict';
//1. Irasd ki egy tetszőleges számú.... legkisebb elemét//

const numericArray = [21, 31, 13, 2, 23, 58, 83, 79, 11, 3, 1, 47];

function smallest(arr) {
    let small = arr[0];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
    small = arr[i];
        }
    }    
    return small;
}
// let small = smallest(numericArray);
document.querySelector('p.one').innerHTML = ('1. A tömb legkisebb eleme: ' + smallest(numericArray));
// console.log(smallest(numericArray));

//2. Irasd ki egy tetszőleges számú.... legnagyobb elemét//
function largest(arr) {
    let large = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
        large = arr[i];
        }
    }
    return large;
}
document.querySelector("p.two").innerHTML = ('2. A tömb legnagyobb eleme: ' + largest(numericArray));

//3. Irasd ki egy tetszőleges számú.... átlagát//
function average(arr) {
    let sum = 0;					
    for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
    }
    let average = sum / 2;	
    return average;
}

document.querySelector("p.three").innerHTML = ('3. A tömb átlaga: ' + average(numericArray));

//4. Irasd ki egy tetszőleges számú.... összegét.//
function amount(arr) {
    let sum1 = 0;					
    for (let i = 0; i < arr.length; i++) {
     sum1 += arr[i];
    }
    return sum1;
}
document.querySelector("p.four").innerHTML = ('4. A tömb számainak összeg: ' + amount(numericArray));


//5. Irasd ki egy tetszőleges számú.... páros elemeinek a számát.//

function pairs(arr) {
    let paros = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            paros += 1;
        }
    }
    return paros;
}
document.querySelector("p.five").innerHTML = ('5. A tömb páros elemeinek a száma: ' + pairs(numericArray));

//6. Irasd ki egy tetszőleges számú.... második legkisebb elemét//

function bubbleSortGrowing(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}
document.querySelector("p.six").innerHTML = ('6. A tömb második legkisebb eleme: ' + bubbleSortGrowing(numericArray)[1]);


//7. Irasd ki egy tetszőleges számú.... harmadik legnagyobb elemét//

function bubbleSortDecreasing(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}
document.querySelector("p.seven").innerHTML = ('7. A tömb harmadik legnagyobb eleme: ' + bubbleSortDecreasing(numericArray)[2]);



//8. Irasd ki egy DbubbleSortDecreasingetszőleges számú.... tartalmaz e 23-as számot//
function find23(arr, num) {  
    for (let i = 0; i < arr.length; i++) {	 
        if (arr[i] === num) {				
            return true;					
        }
    }
    return false;
}
document.querySelector("p.eight").innerHTML = ('8. A tömb tartalmazza e a 23-as számot: ' + find23(numericArray, 23));




// 9.Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! 
// Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

function searchNum(arr, num) {
    bubbleSortGrowing(arr);

    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor ((start + end) / 2);
        if (arr[middle] === num) {
            return true;
        }
        else if (arr[middle] < num) {
            start = middle + 1;
        }
        else {
            end =middle -1;
        }
    }
    return false;
}
let result1 = searchNum(numericArray, 23);
document.querySelector("p.nine").innerHTML = ('9. A tömb tartalmaz e 23-as számot: ' + result1);

   

//10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt,
// objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

function howManyTimes(arr, num) {  
    let count = 0;
    for (let i = 0; i < arr.length; i++) {	 
        if (arr[i] === num) {				
            count++;					
        }
    }
    return count;
}
let result2 = howManyTimes(numericArray, 23);
console.log('10. ' + result2);


//11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, 
//csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

const floating = [1.22, 3.55, 54.65, 34.654, 123.6, 1.1, 0.1, 0.56];

function bubbleSortGrowing1(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}
console.log('11. ' + bubbleSortGrowing1(floating));



//12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, 
//beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! 
//A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

const numericArray2 = [1, 32, 2, 524, 9845, true, 'egy', 345, 'hatvan', 84, 6356];

function filterNum (arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number'){
            numbers.push(arr[i])
        }
    }
    return numbers;
}
function filterNotNum (arr) {
    const notNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number'){
            notNumbers.push(arr[i])
        }
    }
    return notNumbers;
}

function customSort (arr) {
    const numbers = filterNum(arr);
    const notNumbers = filterNotNum(arr);
    const sortedArr = bubbleSortDecreasing(numbers);
    return sortedArr.concat(notNumbers);
}
console.log('12. ' + customSort(numericArray2));

//13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. 
//Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). 
//A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
// Írasd ki a rendezett tömböt!

function requestNum (arr) {
    const inputNum = parseInt(prompt('Adj meg egy számot'));
    arr.push(inputNum);
    const sortedArray = bubbleSortGrowing(arr);
    return sortedArray;
}
console.log('13. ' + requestNum(numericArray));





//14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. 
//Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

const numString = [23, 54, 65, 'kettő', 'egy', 'négy', 32, 'negyvenöt'];

function filterNum2 (arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number'){
            numbers.push(arr[i])
        }
    }
    return numbers;
}
const number13 = filterNum2(numString);

function filterNotNum2 (arr) {
    const strings = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number'){
            strings.push(arr[i])
        }
    }
    return strings;
}
const string13 = filterNotNum2(numString);

function numAndString (arr) {
    const numString1 = [];
    for (let i = 0; i < arr.length/2; i++ ) {
        numString1.push(number13[i]);
        numString1.push(string13[i]);
    }
    return numString1;
}
console.log('14. ' + numAndString(numString));

//15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), 
//és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!

function divorceEven(arr) {
    let even = [];
    for(let i =0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    return even;
}
function divorceOdd(arr) {
    let odd = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            odd.push(arr[i])
        }
    }
    return odd;
}
console.log('15. ' + divorceEven(numericArray));
console.log('15. ' + divorceOdd(numericArray));

//16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két tömb: metszetét,
// unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!
const array1 = [1, 32, 65, 54, 879, 35, 26, 765];
const array2 = [2, 22, 32, 54, 24, 654, 432, 12];

function intersecion(arr1, arr2) {
    let intersec = [];
    for( let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                intersec.push(arr1[i]);
            }
        }
    }
    return intersec;
}

console.log('16/a. ' + intersecion(array1, array2));

function union(arr1, arr2) {
    let unio = [];
    for(let i=0; i < arr1.length; i++) {
        unio.push(arr1[i], arr2[i]);
    }
    return unio;
}
console.log('16/b. ' + union(array1, array2));






function descartes(arr1, arr2) {
    let descart = [];
    for (let i = 0; i < arr1.length; i++) {
        descart.push(arr1[i] * arr2[i]);
    }
    return descart;
}
console.log('16/d. ' + descartes(array1, array2));

