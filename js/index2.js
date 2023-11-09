function isGreaterThan5 (number) {
    if (number > 5) {
        return 'większe';
    } else if (number === 5) {
        return 'równe';
    } else {
        return 'mniejsze';
    }
}

const table1=[1,2,3,4,5,6,7,8,9,10];
table1.length
console.log(table1[2]);

let indexmoj = 5;
indexmoj++;

let a = isGreaterThan5(table1[indexmoj]);
console.log(a);

for (let i = 0; i < table1.length; i++){
    let elementTablicy = table1[i];
    let wynik = isGreaterThan5(elementTablicy);
    console.log(elementTablicy + ' jest ' + wynik + ' 5')
}

