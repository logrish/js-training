function Movie(theMovieName, theMovieYear) {
    var moviewName = theMovieName;
    var movieYear = theMovieYear;
}
var movieList = [];

function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return getElement(id).value;
}

function setElementValue(id, newValue) {
    var element = getElement(id);
    element.value = newValue;
}

function addMovieButtonClicked() {
    console.log("addMovieButtonClicked")
    var movieName = getElementValue("movieNameTextBox");
    var movieYear = getElementValue("movieYearTextBox");
    var movie = new Movie(movieName, movieYear);
    if (isMovieAlreadyAdded(movie)) {
        console.log("exists")
    } else {
        movieList.push(movie);
    }
}

function isMovieAlreadyAdded(var movie) {
    for (var i = 0; i < movieList.length; i++) {
        var item = movieList.get[i];
        console.log(item.movieName + " " + movie.movieName)
        if ((item.movieName == movie.movieName)) {
            return true;
        }
    }
    console.log("new")
    return false;
}

function listAllMovies() {
    var listMovies = "List all the movies";
    var hideMovies = "Hide movie list"
    for (var i = 0; i < movieList.length; i++)
        console.log(movieList[i].movieName)
        //    createMovieTable(movieList)
}

function createMovieTable(list) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("moviesTable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}