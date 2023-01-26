const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');
var resultat ='';


fetch(url)
.then(response => response.json())
.then(data => {
    const pokemons = data.results;
 
    pokemons.forEach(pokemon => {
        console.log(pokemon.name);
        let monhtml = `<li>${pokemon.name}</li>`;

        resultat = resultat + monhtml;

    })       
       
    target.innerHTML=resultat;

})

.catch(function(error) {
  console.log(error);
});
