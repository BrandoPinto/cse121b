/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

function addNumbers() {
    let num1 = parseInt(document.querySelector("#add1").value);
    let num2 = parseInt(document.querySelector("#add2").value);
    document.getElementById("sum").value = add(num1, num2);
}
document.getElementById("addNumbers").addEventListener('click', addNumbers);



// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number3, number4) {
    return number3 - number4;
}

function subtractNumbers() {
    let num3 = parseInt(document.querySelector("#subtract1").value);
    let num4 = parseInt(document.querySelector("#subtract2").value);
    document.getElementById("difference").value = subtract(num3, num4);
}
document.getElementById("subtractNumbers").addEventListener('click', subtractNumbers);



// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

multiply = (number5, number6) => number5 * number6;
multiplyNumbers = () => {
    let num5 = parseInt(document.querySelector("#factor1").value);
    let num6 = parseInt(document.querySelector("#factor2").value);
    document.getElementById("product").value = multiply(num5, num6);
}
document.getElementById("multiplyNumbers").addEventListener('click', multiplyNumbers);


// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number7, number8) {
    return number7 / number8;
}

function divideNumbers() {
    let num7 = parseInt(document.querySelector("#dividend").value);
    let num8 = parseInt(document.querySelector("#divisor").value);
    document.getElementById("quotient").value = divide(num7, num8);
}
document.getElementById("divideNumbers").addEventListener('click', divideNumbers);



// Step 9: Test all of the mathematical functionality of the task3.html page.
document.getElementById("getTotal").addEventListener('click', calculateTotal);

        function calculateTotal() {
            // Obtener el valor del subtotal del usuario
            let subtotalValue = parseFloat(document.getElementById("subtotal").value);

            // Verificar si la casilla de membresía está marcada
            let applyDiscount = document.getElementById("member").checked;

            // Aplicar descuento del 20% si la casilla de membresía está marcada
            if (applyDiscount) {
                subtotalValue *= 0.8; // Aplicar descuento del 20%
            }

            // Formatear el resultado con dos decimales
            let totalFormatted = subtotalValue.toFixed(2);

            // Mostrar el total en la interfaz de usuario
            document.getElementById("total").textContent = `$${totalFormatted}`;
        }

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let newDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = newDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS */
// Declarar e instanciar una variable de matriz para mantener los números del 1 al 13.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Asignar el valor de la variable de matriz al elemento HTML con un ID de array.
document.getElementById("array").textContent = numbersArray;

// Usar el filter() método de matriz para encontrar todos los números impares y asignar el resultado al elemento HTML con un ID de odds.
document.getElementById("odds").textContent = numbersArray.filter(number => number % 2 !== 0);

// Usar el filter() método de matriz para encontrar todos los números pares y asignar el resultado al elemento HTML con un ID de evens.
document.getElementById("evens").textContent = numbersArray.filter(number => number % 2 === 0);

// Usar el reduce() método de matriz para sumar los elementos y asignar el resultado al elemento HTML con un ID de sumOfArray.
document.getElementById("sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number);

// Usar el map() método de matriz para multiplicar cada elemento por 2 y asignar el resultado al elemento HTML con un ID de multiplied.
document.getElementById("multiplied").textContent = numbersArray.map(number => number * 2);

// Usar el map() y reduce() métodos de matriz para sumar la matriz después de multiplicar cada elemento por dos. Asignar el resultado al elemento HTML con una identificación de sumOfMultiplied.
document.getElementById("sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
