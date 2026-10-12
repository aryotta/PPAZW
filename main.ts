// Find the page elements that the app reads from or updates.
// querySelector can return null if an element with that id is missing.
const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
// The ! tells TypeScript to assume this element exists in index.html.
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

// The shape of one todo item. The ? means those properties are optional.
type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

// This array holds the todos while the page is open.
let arrayOfTodos: Todo[] = [];

// Only set up the click handler when all required page elements were found.
if (addButton && inputTextField && todosContainer){

    // Run this function whenever the user clicks the add button.
    addButton?.addEventListener('click',(e) =>{
        // Create a todo using the next array index as its ID.
        arrayOfTodos.push({id: arrayOfTodos.length, title: inputTextField?.value});
        // Clear the input so another todo can be entered.
        inputTextField.value='';
        // Rebuild the visible list so it includes the newly added todo.
        buildList();
    })
}

// Recreates the displayed todo cards from the current array contents.
function buildList(){
    // Remove the old cards before drawing the current list again.
    todosContainer.innerHTML = "";
    // Make one card for each todo in the array.
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        // Bootstrap classes style this element as a spaced card.
        container.classList.add("card","card-body","mt-1","shadow");

        // Create separate elements for the todo's ID and title.
        let id = document.createElement('p');
        id.classList.add("small");

        let title = document.createElement('h3');
        title.classList.add("h3");

        // Create a delete-styled button; it does not delete anything yet.
        let delButton = document.createElement('button');
        delButton.classList.add("btn", "btn-danger");
        delButton.innerText = "Delete";


        // textContent displays text safely rather than interpreting it as HTML.
        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;

        // Nest the ID, title, and button inside the card.
        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(delButton);

        // Add the finished card to the list area in the page.
        todosContainer?.appendChild(container);

    });
}

// Placeholder for the future logic that will remove a todo from the list.
function removeElement(element: HTMLElement) {}