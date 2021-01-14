//Ejemplo 1

function calculateAge(birthYear) {
    var  age = 2021 - birthYear;
    return age;
    
}

function yearsUntilRetirement(birthYear, name) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    console.log(name + ' retires in ' + retirement + ' years.');
}

console.log(yearsUntilRetirement(1995, 'Jonh'));

function power(base, exponent) {
    var multiplicacion = 1;
    for (var index = 0; index < exponent; index++) {
        multiplicacion = multiplicacion * base;
        
    }

    return multiplicacion;
    
}

var resultado = power(3,2);
console.log('potencia: ',resultado);

//forma_dos

function powerTwo(base, exponent) {
    var r = base;
    for (var index = 1; index < exponent; index++) {
        r *= base;
        
    }

    return r;
    
}

console.log(powerTwo(3,3));

//funcion anonima, no tiene nombre
var whatDoYouDo = function(job, name) {
    switch (job) {
        case 'developer':
            return name + 'devolps cool apps.';
            //no necesita break por que se detine al tener un return
        case 'designer':
            return name + 'desings awsome websites.';
        default:
            return name + ' does something else';
    }
}

console.log(whatDoYouDo('developer', 'John Doe'));
console.log(whatDoYouDo('designer', 'Jane Doe'));
console.log(whatDoYouDo('retired', 'Mark Doe'));

//IIFE
(function logname() {
    var name = 'John Doe';
    console.log(name);
})();
//lo mismo que abajo

// function logname() {
//     var name = 'John Doe';
//     console.log(name);
// }

// logname();
(function (lastName) {
    var fullName = 'John ' + lastName;
    console.log('full name: ', fullName);
})('Doe');



//reto 2
function getLergerInt(number1, number2) {
    if(number1===number2){
        return "son iguales";
    }else if (number1>number2){
        return number1;
    }else{
        return number2;
    }
}

console.log(getLergerInt(5,3));

//reto 3

function fibonacciSequence(limit) {
    var f0 = 0;
    var f1 = 1;
    if (limit===1) {
        return 1;
    }else if(limit<1){
        return "el valor es menor a uno :c"
    }else{
        var resultado = 0;
        var axu = 0;
        var axu2 = 0;
        for (var index = 0; index < limit- 2; index++) {
            //co nsole.log(index);
            resultado = f0 + f1;
            console.log(resultado);
            f0 = f1;
            f1 = resultado;
            
        }
    }
}

fibonacciSequence(5);