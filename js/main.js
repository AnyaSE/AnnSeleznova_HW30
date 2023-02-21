function getPost () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(res => res.json())
        .then(res => console.log(res))
}

getPost();

function showPost() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
    fetch(url, {method: "GET"})
    .then(async (res) => {
        if (res.status === 200) {
            const response = await res.json();
            const postDisplay = document.createElement('div');
            postDisplay.classList.add('wrapper');
            response.results.forEach((post) => {
                const postElement = document.createElement('div');
                postElement.classList.add('item');
                postElement.innerHTML = `
                  <p>Name: ${post.name}</p>
                `;
                postDisplay.appendChild(postElement);
                postElement.addEventListener('click', () => showInfo(post.name));
              });
              document.body.appendChild(postDisplay);
        } else {
            console.log ('There is no such post')
        }
    })
};   

function showInfo(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url, {method: "GET"})
    .then(async (res) => {
        if (res.status === 200) {
            const response = await res.json();
            console.log(response);
            const informationDisplay = document.createElement('div');
            const infoElement = document.createElement('div');
            infoElement.innerHTML = `
                <p>Name: ${response.name}</p>
                <p>Height: ${response.height}</p>
                <p>Weight: ${response.weight}</p>
                <img src="${response.sprites.front_shiny
                }"/>
            `;
            informationDisplay.appendChild(infoElement);
            document.body.appendChild(informationDisplay);
            informationDisplay.classList.add("info__card");
            const button = document.createElement('button');
            button.innerHTML = 'Close';
            informationDisplay.appendChild(button);
            button.addEventListener('click', () => {
                informationDisplay.style.display = "none";
            })
        } else {
            console.log ('There is no such post')
        }
    })
};  

showPost();