//Fetch data from the specified file using the fetchData function
const data = await fetchData("../movies.json").catch((error) => console.log(error.message));

//function to fetch data from specific file using fetch API
async function fetchData(file) {
  //Use the fetch function to make an async http request
  const response = await fetch(file);

  //check if response status is ok
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Something went wrong with the request. Error code: ${response.status}`);
  }
}
//checking the data
console.log(data);

//Giving movies the value of all the movies in the data variable.
const movies = data.movies;
console.log(movies);

// Function to create a movie card element based on a movie object
function createMovie(movie) {
  // Get the movie card template from the HTML
  const movieTemplate = document.getElementById("movie-card-template");
  // Clone the template content to create a new movie card
  const template = movieTemplate.content.cloneNode(true);
  // Select various elements within the template to populate with movie data
  const card = template.querySelector(".movie-card");
  const image = template.querySelector(".movie-card__poster");
  const title = template.querySelector(".movie-card__title");
  const rating = template.querySelector(".movie-card__rating");
  const kid = template.querySelector(".movie-card__info--kid");
  const isNew = template.querySelector(".movie-card__info--new");

  card.id = movie.id;
  image.src = movie.poster;
  title.textContent = movie.title;
  rating.textContent = movie.rating;

  //const actors = template.querySelector('.movie-card__info--actors');
  //const description = template.querySelector('.movie-card__info--description');
  //const premiere = template.querySelector(".movie-card__info--premiere")
  //const year = template.querySelector(".movie-card__info--release-year");
  //const genre = template.querySelector(".movie-card__info--genre");
  //const director = template.querySelector(".movie-card__info--director");

  // Set attributes and content based on the movie object
  /*actors.textContent = movie.actors
    premiere.textContent = movie.premiere
    description.textContent = movie.description;
    actors.textContent = movie.actors;
    genre.textContent = movie.genre;
    year.textContent = movie.release_year;
    director.textContent = movie.director;*/

  // Apply additional classes for kid-friendly and new movies
  if (movie.kid) {
    kid.classList.add("kid");
  }
  if (movie.new) {
    isNew.classList.add("new");
  }

  truncText(title, 26);

  // Return the populated movie card template
  return template;
}

// Function to render a list of movies into a specified container
function renderMovies(container) {
  // Check if the movies array is defined
  if (!movies) return;

  // Select the movies to render (in this case, all movies in the 'movies' array)
  let moviesToRender = movies;

  // Iterate through each movie and create/render the corresponding movie card
  moviesToRender.forEach((movie) => {
    const movieElement = createMovie(movie);
    container.appendChild(movieElement);
  });
}

// Check if the current page's URL includes "movieCard", will be something else for the finished product
if (window.location.pathname.includes("filmer")) {
  // Select the container element where movies will be rendered
  const container = document.querySelector(".filmer__main");
  // Call the renderMovies function to populate the container with movie cards
  renderMovies(container);
}

//Function to make sure no movie-card has display = none
/*const addVisibility = (movies) => {
    //Iterating through each movie-card and removing a class that gives them display = none.
    movies.forEach(movie, () => {
        movie.classList.remove("no-visibility");
    });
};*/

//adding an event-listener to in this case a button or something thats clickable.
/*document.querySelector(".new").addEventListener("click", () => {
    //selecting all movie-cards and running the addvisibility function on them
    const cards = document.querySelectorAll(".movie-card");
    addVisibility(cards);

    //Iterating through each movie-card and checking if the card contains the class "new" or not
    cards.forEach((card) => {
        const isNew = card.querySelector(".movie-card__info--new");

        if (!isNew.classList.contains("new")) {
            //If the card doesnt contain the class new the card gets a class that gives the card display = none.
            card.classList.add("no-visi");
        }
    });
});*/

/*document.querySelector(".all").addEventListener("click", () => {
    const cards = document.querySelectorAll(".movie-card");
    addVisibility(cards);
});*/

function truncText(element, maxLength) {
  const text = element.textContent.trim();

  if (text.length > maxLength) {
    const truncatedText = text.substring(0, maxLength - 6) + "...";
    element.textContent = truncatedText;
  }
}
