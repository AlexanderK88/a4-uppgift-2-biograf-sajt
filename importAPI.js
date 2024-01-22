fetch("../movies.json")
.then(movieData => movieData.json())
.then(movies => console.log(movies))