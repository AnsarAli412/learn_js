const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getAllTodos(){
    let response = await fetch(BASE_URL);
    if(!response.ok){
        throw new Error("Can't load the todos");
    }
    else{
        return await response.json();
    }
}

export async function addNewTodo(todo){
    let response = await fetch(BASE_URL,{
        method:"POST"
    });

    if(!response.ok){
        throw new Error("Can't add new todo");
    }else{
        return await response.json();
    }
}