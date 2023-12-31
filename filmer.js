const fullApiJson = [];
getApi()
  .then((data) => data.movies.forEach((challenge) => fullApiJson.push(challenge)))
  .then(randomHeroImage)
  .catch((err) => {
    console.log("errors: " + err.message);
  });

//Fetch Challange API
async function getApi() {
  if (fullApiJson.length == 0) {
    const url = "movies.json";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } else console.log("Api alredy loaded");
}

//random movie title poster as bg for hero section
function randomHeroImage() {
  const heroSection = document.querySelector(".filmer__hero");
  // Generate a random index within the length of the array
  var randomIndex = Math.floor(Math.random() * fullApiJson.length);

  // Access the element at the random index
  var randomElement = fullApiJson[randomIndex];
  console.log(randomElement);

  // Now you can use randomElement in your code
  // Create a linear gradient string
  var image = "url(" + randomElement.poster + ")";
  heroSection.style.backgroundImage = image;
  // Get the .filmer__hero--title element
  var filmerTitle = document.querySelector(".filmer__hero--title");

  // Create a text node with the content from randomElement.title
  var titleTextNode = document.createTextNode(randomElement.title);

  // Append the text node to .filmer__hero--title
  filmerTitle.appendChild(titleTextNode);
}
