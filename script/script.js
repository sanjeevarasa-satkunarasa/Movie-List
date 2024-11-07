let history

function formHandler() {
    const nameEl = document.getElementById("name")
    const ageRatingEl = document.getElementsByClassName("ageRating")
    const suitsEl = document.getElementsByClassName("suits")
    const categoryEl = document.getElementById("category")
    const ratingEl = document.getElementById("rating")
    let outputEl = document.getElementById("output")
    let historyEl = document.getElementById("history")

    let name = nameEl.value
    let ageRating
    for (let i = 0; i < ageRatingEl.length; i++) {
        if (ageRatingEl[i].checked) {
            ageRating = ageRatingEl[i].value
        }
    }

    let suits = []
    for (let i = 0; i < suitsEl.length; i++) {
        if (suitsEl[i].checked) {
            suits.push(suitsEl[i].value)
        }
    }

    let category = categoryEl.value
    let rating = ratingEl.value

    console.log(name, ageRating, suits, category, rating);

    let output = `For the film: ${name} the age rating is ${ageRating}, it suits ${suits}, the category is ${category} and the rating is ${rating}`;
    
    if (localStorage.getItem("key") == null) {
        history = JSON.stringify(output).replace(/"/g, '') + '\n';
        localStorage.setItem("key", history);
        console.log(history);
    } else {
        history = localStorage.getItem("key");
        history += JSON.stringify(output).replace(/"/g, '') + '\n';
        localStorage.setItem("key", history);
        console.log(history);
    }
    
    outputEl.innerHTML = output;
    historyEl.innerHTML = history.replace(/\n/g, '<br>');    
}    