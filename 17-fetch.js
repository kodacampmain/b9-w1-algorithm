function getRickAndMortyCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      // untuk mengecek status response
      if (!response.ok) {
        throw "Terjadi Error";
      }
      // mengubah bentuk data kedalam JSON (Javascript Object Notation)
      return response.json();
    })
    .then((data) => {
      const { results } = data;
      const names = [];
      for (let i = 0; i < results.length; i++) {
        names.push(results[i].name);
      }
      console.log(names);
    })
    .catch((error) => console.log(error));
}

// getRickAndMortyCharacters();
async function getRickAndMortyCharactersAsync() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/characters");
    // untuk mengecek status response
    if (!response.ok) {
      throw "Terjadi Error";
    }
    // mengubah bentuk data kedalam JSON (Javascript Object Notation)
    const data = await response.json();
    const { results } = data;
    const names = [];
    for (let i = 0; i < results.length; i++) {
      names.push(results[i].name);
    }
    console.log(names);
  } catch (error) {
    console.log(error);
  }
}

getRickAndMortyCharactersAsync()