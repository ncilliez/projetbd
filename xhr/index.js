const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');
var resultat ='';

getPokemons();

function getPokemons()
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function()
    {
        console.log("Code HTTP", xhr.status);

        switch (xhr.status)
        {
            case 200:
               
                const response = xhr.response;

                const json = JSON.parse(response);

                const pokemons = json.results;

                pokemons.forEach(pokemon => {

                  let monhtml = `<li>${pokemon.name}</li>`;
      
                  resultat = resultat + monhtml;
                });

                target.innerHTML=resultat;

            break;

            case 404:
                alert("Ooops.. ressources introuvable !");
            break;
        }
    }

    // Execution de la requete
    xhr.send();
}