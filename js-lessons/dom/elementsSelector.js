// element selector = methods use to get the and manipulate html elements, they allow you to select one or multiple 
// html elements from the dom

1. document.getElementById() //element or null
2. document.getElementsByClassName() // html collection like array 
3. document.getElementsByTagName()  // the same as html elements but it gets the tag only not the class
4. document.querySelector() //Selects the first element that matches a CSS selector. It can use various selectors like id, class, or tag.
5. document.querySelectorAll() //Selects all elements that match a CSS selector. It returns a static NodeList of elements.




 className
// const fruits = document.getElementsByClassName('fruits');
// for(let fruit of fruits){
// 	fruit.style.backgroundColor = 'yellow'
// };


// Array.from(fruits).forEach((fruit) =>{
// 		fruit.style.backgroundColor = 'yellow';
// });




 tagName
// const divs = document.getElementsByTagName('div');
// for(let div of divs){
// 	div.style.backgroundColor = 'yellow'
// };
// Array.from(divs).forEach((div) =>{
// 		div.style.backgroundColor = 'yellow';
// });



querySelector
 // const fruit = document.querySelector('h1');
 // fruit.style.backgroundColor = 'yellow'




querySelectorAll

// const foods = document.querySelectorAll('div');
// foods.forEach(food => {
// 	food.style.backgroundColor = 'yellow'
// })



















