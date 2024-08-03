// storage.js
 function loadTodosFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

 function saveToLocalStorage(text) {
    let todos = JSON.parse(localStorage.getItem('todos')) || []; 
    todos.push(text);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeFromLocalStorage(text) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo !== text);
    localStorage.setItem('todos', JSON.stringify(todos));
}


export {loadTodosFromLocalStorage, saveToLocalStorage, removeFromLocalStorage};

