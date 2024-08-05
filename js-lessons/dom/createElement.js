const newh1 = document.createElement('h1');
newh1.textContent = 'pizza';
newh1.id = 'haha';
newh1.style.color = 'red'

// document.body.append(newh1) // adds at the very bottom
// document.body.prepend(newh1) //adds at the very top
// document.getElementById('box1').append(newh1)
// document.getElementById('box1').prepend(newh1)



//removing the elements
document.getElementById('box1').removeChild(newh1)
