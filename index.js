/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are movie titles.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitle = [];

  if (movies.length === 0) {
  throw "The movie array is empty";
  } else {
    movieTitle = movies.map((movie) => {
      return movie.title;
    })
  }
  return movieTitle;
}


/**
 * checkIfAnyMovieHasRating()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the movies has been given the provided rating. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} [rating="G"] - A movie rating. Defaults to "G".
 * @returns {boolean|Error} Returns `true` if a movie exists in the list with the given rating, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "G");
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "R");
 *  //> false
 */
function checkIfAnyMovieHasRating(movies, rating = "G") {
  if (movies.length === 0) {
      throw "The movie array is empty"; 
      } else { 
       return movieRating = movies.some(movie => movie.rated === rating
      );
    }
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty, throw an error with a message. If the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|Error|null} The movie object with the matching `imdbID`.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if (movies.length === 0) {
    throw "The movie array is empty";
  } 

 let movieId = movies.find(movie => movie.imdbID === id);

  if(movieId) {
    return movieId;
  } else {
    return null;
  }
}
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty, throw an error with a message. If no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]|Error} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  if (movies.length === 0) {
    throw "The movie array is empty"; 
  } 
  return movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
}
/* for time purposes use includes() because your ass is slow as hell; after exam practice using the split method with John for office hours

- using includes because the movie.genre is a string and not an array; I can also split(',') to convert into an array and loop through the array but too much work and time - though, it would be a nice challenge.
*/



/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]|Error} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  if (movies.length === 0) {
    throw "The movie array is empty";
  } 
  return movies.filter(movie => movie.released.match(/\d{4}/)[0] <= year);
}
//I love me some regEx - regEx saved me on this one because I know no other way, hahaha! Take that, STRING!


/**
 * checkMinMetascores()
 * -----------------------------
 * Returns either true or false depending whether all movies have a minimum metascore. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} metascore - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinMetascores(movies, 90));
 *  //>  false
 */
function checkMinMetascores(movies, metascore) {
  if (movies.length === 0) {
    throw "The movie array is empty";
  }
  return movies.every(movie => Number(movie.metascore) >= metascore);
}

/**
 * getRottenTomatoesScoreByMovie()
 * -----------------------------
 * Transform each movie, returning an array of objects where the key is the title of the movie and the value is the score received from Rotten Tomatoes. If there are no movies, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object[]|Error} An array of movie objects where the key is the movie title and the value is the score received from Rotten Tomatoes.
 * 
 * NOTE: You must use both the `.map()` method and the `.find()` method.
 *
 * EXAMPLE:
 *  getRottenTomatoesScoreByMovie(movies);
 *  //> [
      { "Toy Story 4": "97%" },
      { "Inside Out": "98%" },
      { Coco: "97%" },
      { "Incredibles 2": "93%" },
      { Moana: "95%" },
      { "How to Train Your Dragon": "99%" },
      { Paddington: "97%" },
      { "The Lion King": "93%" },
      { Fantasia: "95%" },
      { "James and the Giant Peach": "91%" },
    ];
 */
function getRottenTomatoesScoreByMovie(movies) {
  if (movies.length === 0) {
    throw "The movie array is empty"; 
  }
  return movies.map((movie) => {
    let metascore = movie.ratings.find(rating => rating.source.toLowerCase() == "rotten tomatoes")
    return {[movie.title]: metascore.value};
  });
}
/* this one was a bit tricky, but I finally figured out the order since it wants to be complicated and use the find() method (very unnecessary -_-)

1. I put the map() method first since I want to return a whole new copy of the movies array

2. then I wanted to find the movie's metascore rating, ratings is another array withing the movies array; therefore we have to write it out as: 
    movie.ratings.find()
    *** note there is an 's' at the end of ratings because we are looping into the ratings array itself (it is not an iterator like rating, which comes next). 

3. now that we have movie.ratings.find() we set the conditions for our function as so: if rating.source.toLowerCase() == "rotten tomatoes" find it and put it into an array. we are telling our fxn to find the source that is a metascore because there are more than 1 rating sources in our ratings [w/ an s] array. I set this fxn to the name metascore

I put toLowerCase() to prevent case-sensitivity errors in real life like: RotTen TomaToes; sometimes people make mistakes, hahaha. 

4. finally, I returned a new obj using the string literal syntax for objects. I put the .value at the end of our variable metascore(which is a higher order fxn) to return the value of the metascore rating in our new obj. YAYYYY! I done whooohoooh!
*/


// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  checkMinMetascores,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
};
