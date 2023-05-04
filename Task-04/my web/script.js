const pokemonCards = document.getElementById("pokemon-cards");
const typeFilter = document.getElementById("type-filter");
const shareButton = document.getElementById("share-button");

let pokemonList = [];

// Create a card for a Pokemon
function createCard(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      const card = document.createElement("div");
      card.className = "card";

      const image = document.createElement("img");
      image.src = data.sprites.front_default;
      card.appendChild(image);

      const name = document.createElement("h2");
      name.textContent = data.name;
      card.appendChild(name);

      const type = document.createElement("p");
      type.textContent = `Type: ${data.types[0].type.name}`;
      card.appendChild(type);

      const ability = document.createElement("p");
      ability.textContent = `Ability: ${data.abilities[0].ability.name}`;
      card.appendChild(ability);

      const shareLink = document.createElement("a");
      shareLink.textContent = "Share";
      shareLink.href = `https://twitter.com/intent/tweet?text=Check+out+this+cool+Pokemon:+${data.name}!`;
      shareLink.target = "_blank";
      card.appendChild(shareLink);

      pokemonCards.appendChild(card);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Create cards for all Pokemon in the list
function createCards() {
  pokemonCards.innerHTML = "";
  pokemonList.forEach((pokemon) => {
    createCard(pokemon);
  });
}

// Filter Pokemon by type
function filterByType() {
  const selectedType = typeFilter.value;
  if (selectedType === "") {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((response) => response.json())
      .then((data) => {
        pokemonList = data.results.map((entry) => entry.name);
        createCards();
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    pokemonList = [];
    fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
      .then((response) => response.json())
      .then((data) => {
        pokemonList = data.pokemon.map((entry) => entry.pokemon.name);
        createCards();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// Add event listeners
typeFilter.addEventListener("change", filterByType);
shareButton.addEventListener("click", () => {
  const shareText = "Check out these cool Pokemon!";
  const pokemonNames = pokemonList.join(", ");
  const shareLink = `https://twitter.com/intent/tweet?text=${shareText}+${pokemonNames}`;
  window.open(shareLink, "_blank");
});

// Initialize the page with default Pokemon
filterByType();

//////////////////////////////////////using buttons
// Get the filter buttons
const allButton = document.getElementById("all");
const grassButton = document.getElementById("grass");
const waterButton = document.getElementById("water");
const fireButton = document.getElementById("fire");
// Get the container for the Pokemon cards
 pokemonCards = document.getElementById("pokemonCards");

// Add event listeners to the filter buttons
allButton.addEventListener("click", () => {
  showAllPokemon();
});

grassButton.addEventListener("click", () => {
  filterPokemon("grass");
});

waterButton.addEventListener("click", () => {
  filterPokemon("water");
});

fireButton.addEventListener("click", () => {
  filterPokemon("fire");
});

// Function to filter Pokemon based on type
function filterPokemon(type) {
  pokemonCards.innerHTML = "";
  fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemonList = data.pokemon.map((pokemon) => pokemon.pokemon.name);
      pokemonList.forEach((pokemon) => {
        createCard(pokemon);
      });
    });
}

// Function to show all Pokemon
function showAllPokemon() {
  pokemonCards.innerHTML = "";
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((response) => response.json())
    .then((data) => {
      const pokemonList = data.results.map((pokemon) => pokemon.name);
      pokemonList.forEach((pokemon) => {
        createCard(pokemon);
      });
    });
}
