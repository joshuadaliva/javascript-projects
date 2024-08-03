

import {removeFromLocalStorage } from './storage.js';


// todo.js
export function createTodoItem(text) {
    const item = document.createElement('div');
    item.textContent = text;
    item.classList.add('todo-item');

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        item.remove();
        removeFromLocalStorage(text);
    });
    item.appendChild(deleteButton);

    return item;
}
