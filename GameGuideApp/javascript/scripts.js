document.addEventListener('DOMContentLoaded', function(){

  //List of all the elemnts being grabbed
  const pokemonTableRow = document.querySelector('.pokemonTableRow');

  //url to json data container list of pokemon
  const url = 'pokemonList.json';

  //fetching data from the url
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    let pokeListItems = 
    `<tr>
      <th>Poke Pic</th>
      <th>Poke Index</th>
      <th>Pokemon</th>
      <th>Type 1</th>
      <th>Type 2</th>
    </tr>`;
    myJson.forEach(pokemon => {
      pokeListItems += `<tr>
      <td> ${pokemon.C} </td> 
      <td> ${pokemon.E.slice(1,4)} </td>
      <td> ${pokemon.C} </td>
      <td> ${pokemon.K.slice(35,-6)} </td>
      <td> ${pokemon.L.slice(17,-4)} </td>
      </tr>` 
    });
    pokemonTableRow.innerHTML = pokeListItems;
    //take pokemonList and dynamically repeat and append data
    


  });
})