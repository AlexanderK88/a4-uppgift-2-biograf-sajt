const movies = data.movies;
console.log(movies);
function createMovie(movie) {
  const movieTemplate = document.getElementByIdementById("movieCard Template");
  const template = movieTemplate.content.cloneNode(true);
  const card = template.querySelector(".movie-card");
  const image = template.querySelector(".movie-poster");
  const title = template.querySelector(".movie-title");
  const rating = template.querySelector(".movie-rating");
  const actors = template.querySelector(".movie-actors");
  const description = template.querySelector(".movie-description");
  const premiere = template.querySelector(".movie-premiere");
  const year = template.querySelector(".movie-release-year");
  const genre = template.querySelector(".movie-genre");
  const director = template.querySelector(".movie-director");
  const kid = template.querySelector(".movie-kid");
  const isNew = template.querySelector(".movie-new");

  card.id = movie.id;
  image.src = movie.poster;
  title.textContent = movie.title;
  actors.textContent = movie.actors;
  premiere.textContent = movie.premiere;
  description.textContent = movie.description;
  rating.textContent = movie.rating;
  actors.textContent = movie.actors;
  genre.textContent = movie.genre;
  year.textContent = movie.release_year;
  director.textContent = movie.director;
  if (movie.kid) {
    kid.textContent = "Yes";
  } else {
    kid.textContent = "No";
  }
  if (movie.new) {
    isNew.classList.add("new");
  }
  return template;
}

function renderMovies(container, threeHighest) {
  if (!movies) return;
  let moviesToRender;
  if (threeHighest) {
    moviesToRender = movies.sort((a, b) => b.rating - a.rating).slice(0, 3);
  } else {
    moviesToRender = moviesToRender;
  }
  moviesToRender.forEach((movie) => {
    const movieElement = createMOvie(movie);
    container.appendChild(movieElement);
  });
}

if (window.location.pathname.includes("indextest")) {
  const container = document.querySelector(".container");
  renderMovies(container);
}

document.querySelector(".kids").addEventListener("click", () => {
  const cards = document.querySelectorAll(".movie-card");
  addVisability(cards);

  cards.forEach((card) => {
    const kidElement = card.querySelector(".movie-kid");
    if (kidElement.textContent == "No") {
      card.classList.add("no-visi");
    }
  });
});
