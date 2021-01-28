//Arreglos

//ejemplo 1
function multiplyByTwo(numbers) {
    var multipliedNumbers = [];
    for (var index = 0; index < numbers.length; index++) {
        multipliedNumbers.push(numbers[index]*2);
        
    }
    return multipliedNumbers;
}

var input = [1, 3, 4, 7, 2, 1];

var output = multiplyByTwo(input);


console.log('Input: ', input);
console.log('Ouput: ', output);

//reto 1
function calculateAverage(numbers) {
    suma = 0;
    for (var index = 0; index < numbers.length; index++) {
        suma = numbers[index]+suma;     
    }

    avg= suma/ numbers.length;
    return avg;
}

var input = [1, 3, 4, 7, 2, 1];

var output = calculateAverage(input);


console.log('Input: ', input);
console.log('Ouput: ', output);


//ejemplo 2

var car = {
    brand: 'Nisan',
    model: 'Versa',
    year: 2020
}

//console.log(Object.keys(car))

function objectToArray(obj) {
    var keys = Object.keys(obj);
    var pairs = [];
    for (var index = 0; index < keys.length; index++) {
        pairs.push( [keys[index], obj[keys[index]]] );
        
    }
    return pairs;
}


console.log(objectToArray(car));
arra = [ ["brand", "Nisan"], ["model", "Versa"], ["year", 2020]];
console.log(arra);

//reto 2 
function arrayToObject(arr) {
    var obj={};
    for (var index = 0; index < arr.length; index++) {
        
        obj[arr[index][0]]=arr[index][1];   
    }

    return obj;
}


console.log(arrayToObject(arra));

var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

  function pluck(list, propertyName) {
      result = []
      for (var index = 0; index < list.length; index++) {
          result.push(list[index][propertyName]);
          
      }

      return result;
    
  }

  console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]