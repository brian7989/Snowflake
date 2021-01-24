{
    const form = document.querySelector(".js-form");
    const input = form.querySelector("input");
    const greeting = document.querySelector(".greeting");
    const USER_LS = "currentUser";

    const loadName = () => localStorage.getItem(USER_LS);

    const saveName = text => localStorage.setItem(USER_LS, text);

    const greetingSubmitHandler = event => {
        event.preventDefault();
        saveName(input.value);
        init();
    }

    const init = () => {
        form.addEventListener("submit", greetingSubmitHandler);
        if (loadName()) {
            greeting.innerHTML = `<h5 style="font-size: 18px;
            letter-spacing: 4px;">${loadName().toUpperCase()}</h5>`;
        }
    }

    init();
}
