const formatJson = '?format=json';

window.addEventListener("load", () => {
    getJson();
});

getJson = () => {
    fetch('https://swapi.co/api/films/?format=json').then(response => {
        response.json().then(json => {
            getDataJson(json);
        });
    });
}

getDataJson = json => {
    const data = json.results;
    const dataComplete = data.forEach(element => {
        const title = element.title;
        const episode = element.episode_id;

        const characters = element.characters;
        // console.log(characters);

        let charactersUrl = characters.map(element => {
            const objCharacter = {
                url: element
            }
            return objCharacter;
        });
        paintInfo(title, episode, charactersUrl);
    });
}

paintInfo = (title, episode, charactersUrl) => {
    let container = document.getElementsByClassName('container-info');
    charactersUrl.forEach(element => {
        console.log(element.url);
    });
    let output = `
        <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="https://dummyimage.com/100x300">
              <span class="card-title">${title}</span>
            </div>
            <div class="card-content">
              <p>Episode: ${episode}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    `
    // container.insertAdjacentHTML('beforeEnd', output);//revisar
}


// content.insertAdjacentHTML('beforeEnd', hero);