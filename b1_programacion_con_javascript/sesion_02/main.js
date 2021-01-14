var time = 30;
var greeting;

//reto 1

if(time>23 || time<0){
    greeting = "no existe esa hora";
}else{
    if(time<12){
        greeting = "Good morning";
    } else if(time<20){
        greeting = "Good afternoon";
    }else if(time>=20){
        greeting = "Good evening";
    }
}
if(typeof(time)==="string"){
    greeting = "es un string :c";
}

console.log(greeting);

//otra forma de hacerlo:
// if (time >= 0 && time < 12) {
//   greeting = "Good morning";
// } else if (time >= 12 && time < 20) {
//   greeting = "Good afternoon";
// } else if (time >= 20 && time < 24) {
//   greeting = "Good evening";
// } else {
//   greeting = "Unknown hour";
// }



//ejemplo 2
var day = 1;
var text;

switch (day) {
    case 0:
        text="Sunday";
        break;
    case 1:
        text="Monday";
        break;
    case 2:
        text ="Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;

    default:
        text = "Error";
}

console.log(text);

//Operador Ternario
//condicion ? expresion_true: expresion_false

var speed = 120;
var message;

//if / else
if(speed > 100){
    message = "You're going too fast!";
}else{
    message = "Under the limit";
}
console.log(message);

//Ternario
var speed = 120;
var message = speed > 100 ? "You're going too fast!": "Under the limi";

console.log(message);

// -0 === 0
// true
// NaN ===NaN
// false

// for (var i = 0; i <=50; i++) {
//     //code
//     console.log("Hola")
    
// }

// //while
// var i =0;
// while (i<=200) {
//     console.log("Hola con while")
//     i++;
// }

// //reto 2

// for (var index = 0; index <= 100; index++) {
//     if(index % 2 === 0){
//         console.log(index);
//     }
    
// }


//reto 3


for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }
  }