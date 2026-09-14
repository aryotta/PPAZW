const addButton: HTMLButtonElement | null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement | null = document.querySelector("#dodaj_inp");
const todosContainer: HTMLDivElement = document.querySelector("#app")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
};

let arrayOfTodos: Todo[]=[];

if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click',(e) =>{
        let inputTextValue = inputTextField?.value;
        
        let newTodo: Todo = {
            id: arrayOfTodos.length,
            title: inputTextValue,
        }

        arrayOfTodos.push(newTodo);

        inputTextField.value = "";

        boilList();

    })
}

function boilList() {
    arrayOfTodos.forEach(todo => {
        let new_todo = document.createElement("div");
        new_todo.classList.add('todo-item');

        let new_title = document.createElement("h1");
        let new_opis = document.createElement("p");

        new_title.textContent = "Tytuł: " + todo.title;
        new_opis.textContent = "ID " + Element.bind;

        new_todo.appendChild(new_title);
        new_todo.appendChild(new_opis);

        todosContainer?.appendChild(new_todo);
    })
}