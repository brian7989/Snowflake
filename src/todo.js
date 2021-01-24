const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = document.querySelectorAll(".todoinput");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(index) {
    toDos[index] = "";
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    toDos.forEach((td, index) => {
        if (td) {
            const li = document.querySelector(`#td${index+1}`);
            const span = document.createElement("span");
            span.id = `td${index + 1}`;
            span.innerText = td;
            span.onclick = () => {
                deleteToDo(index);
                toDoForm.insertBefore(li, document.querySelector(`#td${index+2}`));
                span.remove();
            }
            toDoForm.insertBefore(span, document.querySelector(`#td${index+2}`));
            li.remove();
        }
    })
    saveToDos();
}

function handleSpanClick(event) {
    console.log("hi");
    console.log(event.target);
}

function todoSubmitHandler(event) {
    event.preventDefault();
    toDoInput.forEach((t, index) => {
        if (t.value){
            toDos[index] = t.value;
        }
    })
    paintToDo();
    toDoInput.forEach(t => t.value = "");
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        toDos = parsedToDos;
        paintToDo();
    }
}


function todoInit() {
    loadToDos();
}

todoInit();

$(".todoinput").keypress(function (e) {
    if (e.which == 10 || e.which == 13) {
        $(".js-toDoForm").submit();
    }
});