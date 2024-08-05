// nodelist - static collection of elements by (id,class , element)
//can be created by querySelectorAll, similar to array but only forEach
//nodelist wont update automatically




let buttons = document.querySelectorAll('.myclass');
buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		btn.style.backgroundColor = 'yellow';
	})
})