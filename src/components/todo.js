{
    const toDoForm = document.querySelector(".js-toDoForm");
    const toDoInput = document.querySelectorAll(".todoinput");
    const TODOS_LS = "toDos";

    let toDos = [];

    const deleteToDo = index => {
        toDos[index] = "";
        saveToDos();
    }

    const saveToDos = () => localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

    const paintToDo = () => {
        toDos.forEach((td, index) => {
            if (td) {
                const li = document.querySelector(`#td${index + 1}`);
                const span = document.createElement("span");
                span.id = `td${index + 1}`;
                span.innerText = td;
                span.onclick = () => {
                    deleteToDo(index);
                    toDoForm.insertBefore(li, document.querySelector(`#td${index + 2}`));
                    span.remove();
                }
                toDoForm.insertBefore(span, document.querySelector(`#td${index + 2}`));
                li.remove();
            }
        })
        saveToDos();
    }

    function todoSubmitHandler(event) {
        event.preventDefault();
        toDoInput.forEach((t, index) => {
            if (t.value) {
                toDos[index] = t.value;
            }
        })
        paintToDo();
        toDoInput.forEach(t => t.value = "");
    }

    const loadToDos = () => {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if (loadedToDos) {
            toDos = JSON.parse(loadedToDos);
            paintToDo();
        }
    }

    const init = () => loadToDos();

    init();

    $(".todoinput").keypress(function (e) {
        if (e.which == 10 || e.which == 13) {
            $(".js-toDoForm").submit();
        }
    });
}
