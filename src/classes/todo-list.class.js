
export class TodoList {
    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => todo.completado != true);
        this.guardarLocalStorage();
    }

    // Se convierte a JSON para que se pueda pasar a string de manera normal
    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        this.todos = ( localStorage.getItem('todo')) ?  JSON.parse(localStorage.getItem('todo')) : [];


        // if( localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log(this.todos);
        // } else {
        //     this.todos = [];
        // }
    }
}