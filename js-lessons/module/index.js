import { createTodoItem } from './todo.js';
import { loadTodosFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from './storage.js';

// Load existing to-do items from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const todos = loadTodosFromLocalStorage();
    todos.forEach((todo) => {
        const todoItem = createTodoItem(todo);
        todoList.appendChild(todoItem);
    });
});


// Handle form submission
document.getElementById('submit').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();

    if (text) {
        // Create new to-do item
        const todoItem = createTodoItem(text);

        // Append new item to the list
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(todoItem);

        // Save to localStorage
        
	saveToLocalStorage(text);
        // Clear input field
        input.value = '';
    }
});



