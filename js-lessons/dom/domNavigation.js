// dom navigation = the process navigating throught the structure of an html 
// document using javascript


.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children



firstElementChild

// const fruits = document.getElementById('fruits');
// const first = fruits.firstElementChild;
// first.style.backgroundColor = 'yellow'

// const ulList = document.querySelectorAll('ul');
// ulList.forEach(ul => {
// 	const first = ul.firstElementChild;
// 	first.style.backgroundColor = 'red'
// })




lastElementChild

// const fruits = document.getElementById('fruits');
// const last = fruits.lastElementChild;
// last.style.backgroundColor = 'yellow';


// const fruits = document.querySelectorAll('ul');
// fruits.forEach(last => {
// 	const lastElement = last.lastElementChild;
// 	lastElement.style.backgroundColor = 'yellow';
// })



nextElementSibling
// const apple = document.getElementById('apple');
// const nextSibling = apple.nextElementSibling;
// nextSibling.style.backgroundColor = 'red'



previousElementSibling
// const banana = document.getElementById('banana');
// const prevSibling = apple.previousElementSibling;
// nextSibling.style.backgroundColor = 'red'


parentElement
// const element = document.getElementById('banana');
// const parent = element.parentElement;
// parent.style.backgroundColor = 'yellow'


children
// const element = document.getElementById('fruits');
// const children = element.children;

// Array.from(children).forEach(child => {
// 	child.style.backgroundColor = 'yellow'
// })
