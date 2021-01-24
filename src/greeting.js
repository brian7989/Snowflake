const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greeting");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    return currentUser;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text)
}

form.addEventListener("submit", greetingSubmitHandler);

function greetingSubmitHandler(event) {
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    greetingInit();
}

function askForName() {
    form.addEventListener("submit", greetingSubmitHandler);
}

const greetingInit = () => {
    if (loadName() !== null) {
        greeting.innerHTML = `<h5 style="
        font-size: 18px;
        letter-spacing: 4px;">
        ${loadName().toUpperCase()}</h5>`;
    }
}

greetingInit();
