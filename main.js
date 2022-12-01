let page_count = 1;
const getRickAndMortyCharacters = async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page_count}`
  );
  const data = await response.json();
  page_count += 1;
  return data.results;
};
const gridContainer = document.getElementById("grid-container");
const main = async () => {
  const rickAndMortyCharacters = await getRickAndMortyCharacters();
  rickAndMortyCharacters.forEach((character) => {
    const sprite = document.createElement("img");
    sprite.className = "img-container";
    sprite.setAttribute("src", character.image);
    sprite.draggable = false;
    sprite.onload = () => (sprite.style.visibility = "visible");
    gridContainer.appendChild(sprite);
    console.log(character.name);
  });
};
main();
