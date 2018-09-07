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
    let pokeListItems;
    myJson.forEach(pokemon => {
      pokeListItems += '<p>' + pokemon.C + '</p>'
    });
    pokemonTableRow.innerHTML = pokeListItems;
    //take pokemonList and dynamically repeat and append data
    


  });
})