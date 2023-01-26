const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');
var resultat ='';

getPokemeons()
function getPokemeons()
{
    $.ajax(url, {
        method: "GET",
        success: function(response)
        {
          const pokemons = response.results;

          pokemons.forEach(pokemon => {

            let monhtml = `<li>${pokemon.name}</li>`;
      
          resultat = resultat + monhtml;
          });

          target.innerHTML=resultat;

        },
        error: function(event)
        {
            console.log("Error !");
            console.log(event);
        }

    });
}