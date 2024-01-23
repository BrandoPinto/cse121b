/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Brando Pinto';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/img.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('img')


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML= `<strong>${currentYear}</strong>`;
imageElement.setAttribute('src', profilePicture);


/* Step 5 - Array */
// Declare and instantiate an array variable to hold your favorite foods
const favFoods = ['Pizza', 'Spageties', 'Ice Cream'];

// Modify the HTML element with the id 'food' to display your favorite foods array
foodElement.innerHTML = `<br>${favFoods}`;

// Declare and instantiate a variable to hold another favorite food
const newFavoriteFood = 'Burger';

// Add the value stored in the new variable to your favorite foods array
favFoods.push(newFavoriteFood);

// Update the HTML element with the id 'food' to show the modified favorite foods array
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the first element in the favorite foods array
favFoods.shift();

// Update the HTML element with the id 'food' to show the modified favorite foods array
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the last element in the favorite foods array
favFoods.pop();

foodElement.innerHTML += `<br>${favFoods}`;





