const name = document.querySelector('#name');
const releaseDate = document.querySelector('#release-date');
const platform = document.querySelector('#platform');
const genre = document.querySelector('#genre');
const description = document.querySelector('#description');
const players = document.querySelector('#players');
const type = document.querySelector('#type');

const url = 'https://wdd341-w3-4.onrender.com/games'

async function apiFetch() {
    try {
        const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayGame(data);
    } else {
        throw Error(await response.text());
    } 
} catch (error) {
        console.log(error);
    }
}

function displayGame(data) {
    display.innerHTML = `${data[0].name}`
    info.innerHTML = `<p>${data[0].releaseDate}</p>
    <p>${data[0].platform}</p>
    <p>${data[0].genre}</p>
    <p>${data[0].description}</p>
    <p>${data[0].players}</p>
    <p>${data[0].type}</p>`
}

apiFetch();