import './styles.css';
import {Todo, TodoList} from './classes' // Cuando no se especifica ningun nombre, busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!');

// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout( () => {
//     localStorage.removeItem('mi-key');
// }, 1500)

todoList.todos.forEach(todo => {
    crearTodoHtml(todo);
});