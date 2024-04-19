const userInput = document.querySelector("#userInput");
const searchBtn = document.querySelector("#search");
let result = document.querySelector("#result");
let kanji;
let url = `https://kanjiapi.dev/v1/kanji/`;

let fetchData = (kanji) => {
    let finalUrl = url + kanji;
    fetch(finalUrl).then(res => res.json())
        .then(data => {
            console.log(data.kanji);
            console.log(data.stroke_count);
            console.log(data.kun_readings.join(","));
            console.log(data.on_readings.join(","));
            console.log(data.meanings.join(","));
            result.innerHTML = `
            <h2>${data.kanji}</h2>
            <h4>Stroke Count : ${data.stroke_count}</h4>
            <h4>JLPT : ${data.jlpt}</h4>
            <p>KUN : ${data.kun_readings.join(",")}</p>
            <p>ON : ${data.on_readings.join(",")}</p>
            <p>${data.meanings.join(",")}</p>
             `;
            userInput.value = "";
        }).catch(e => {
            result.innerHTML = `<p class="msg">This word is not found! Try Again</p>`
        })
}

const fetchKanji = () => {
    kanji = userInput.value;
    if (kanji) {
        fetchData(kanji)
    } else {
        result.innerHTML = `<p class="msg">Please enter a word!! Let search Kanji</p>`
    }
}
searchBtn.addEventListener("click", fetchKanji);