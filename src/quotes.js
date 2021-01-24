const settingsInit = () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const quoteDiv = document.querySelector(".quotes");
            const quoteP = quoteDiv.querySelector("p")
            const quoteH3 = quoteDiv.querySelector("h3");
            const quoteObj = data[Math.floor(Math.random() * 100)];
            quoteP.innerText = quoteObj.text;
            quoteH3.innerText = quoteObj.author;
            console.log(data[Math.floor(Math.random() * 100)]);
        });
}

settingsInit();