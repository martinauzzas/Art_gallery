async function clickedEvent(img_index, item_index){
    let infos = document.getElementsByTagName('img')[img_index].attributes[1].value;

    console.log(infos)


    let headers = new Headers([
        ['Content-type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${infos}`, {
        method: 'GET',
        headers: headers
    });  
    
    let result = await fetch(request);

    let response = await result.json();

    console.log(response)

    let titles = document.getElementsByTagName('h4')[img_index];
    titles.innerHTML = `${response.data.title}`
    let dates = document.getElementsByClassName('card-infos')[img_index];
    dates.innerHTML = `Author: ${response.data.artist_title} <br> Date End: ${response.data.date_end} <br> Type of Painting: ${response.data.classification_title}`
    // artist.title classification_title

    };


function getArt(id, event){
    switch(id){
        case 'fig1': {
            clickedEvent(0,3)
            break;
        }
        case 'fig2': {
            clickedEvent(1,3)
            break
        }
        case 'fig3': { // Title of the song
            event.stopPropagation();
            clickedEvent(2,3)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break
        }
        case 'fig5': { // Title of the song
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5,1)
            break;
        }
        case 'fig7': {
            clickedEvent(6,1)
            break;
        }
    }
}