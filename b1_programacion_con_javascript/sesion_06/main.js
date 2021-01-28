

function addColor(car) {
    var newCar = Object.assign({}, car, {
        color: 'Black'
    })
    //car.color = 'Black';
    return newCar;
}

// var car= {
//     brand: 'Nisan',
//     model: 'Sentra',
//     year: 2021
// }

// console.log('Before calling addColor()', car)

// var sameCar = addColor(car);

// console.log('After calling addColor()', car);
// console.log('After calling addColor()', sameCar);

//ejemplo 2
var cart = [
    {
        item: 'Laptop',
        quantity: 1
    }
]

function addItemToCart(car, item, quantity) {
    var newCart = cart.map(function (element) {
        return element;
    });
    newCart.push({
        item: item,
        quantity: quantity
    });
    return newCart;
}

car = addItemToCart(cart, 'phone', 1);

console.log('cart', cart);


//reto 1
function flatten(arrays) {
    return arrays.reduce(function(acumulador, actual) {
        return acumulador.concat(actual);
      }, []);
}
  
var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]

//reto 2

function compact(array) {
    var arrays= array.filter(function (params) {
       return !!params; 
    });
    return arrays;
}

var array = [0, 1, false, 2, '', 3];
var compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]