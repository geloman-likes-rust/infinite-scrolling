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
const addItemsToGridContainer = async () => {
  const rickAndMortyCharacters = await getRickAndMortyCharacters();
  rickAndMortyCharacters.forEach((character) => {
    const sprite = document.createElement("img");
    sprite.className = "img-container";
    sprite.setAttribute("src", character.image);
    sprite.draggable = false;
    sprite.onload = () => (sprite.style.visibility = "visible");
    gridContainer.appendChild(sprite);
  });
};

let options = {
  root: null,
  rootMargins: "0px",
  treshhold: 0.5,
};
const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    addItemsToGridContainer();
  }
};
const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(document.getElementById("footer"));

const main = async () => {
  await addItemsToGridContainer();
  const footer = document.createElement("div");
  footer.id = "footer";
  document.body.append(footer);
  console.log(page_count);
};
main();
