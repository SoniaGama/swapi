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
    let container = document.getElementById('container-result');
    charactersUrl.forEach(element => {
        // console.log(element.url);
    });
    let output = `
        <div class="col s12 m7">
            <h2 class="header">${title}</h2>
            <div class="card horizontal">
              <div class="card-image">
                <img src="https://dummyimage.com/150x200">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Episode: ${episode}</p>
                </div>
                <div class="card-action">
                 
                </div>
              </div>
            </div>
        </div>
        `
    container.insertAdjacentHTML('beforeEnd', output);
}