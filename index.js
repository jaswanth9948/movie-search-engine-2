var inputElement = document.getElementById("mve-name");
var searchElement = document.getElementById("mve-search");
var movieWrapperElement = document.getElementById("movie-wra");
var movieStatusElement = document.getElementById("status")

searchElement.addEventListener("click", function () {
    movieWrapperElement.innerHTML =" "
    movieStatusElement.innerText = " "
    movieStatusElement.innerText=" Loading...."
        fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${inputElement.value}`)
        .then((res) => {
            return res.json()
        }).then((res2) => {
            if (res2.Response == "True") {
                movieStatusElement.innerText =" "
                inputElement.value=""
                var movieDetails = res2.Search
                movieDetails.map((movie,i) => {
                    var movieCardElement = document.createElement("div");
                    movieCardElement.className = "movie-card"
                    var movieImageElement = document.createElement("img");
                    movieImageElement.className = "movie-poster"
                    movieImageElement.src = movie.Poster
                    var movieTitleElement = document.createElement("p");
                    movieTitleElement.innerHTML = `Title:<b>${movie.Title}</b>`
                    var movieReleaseYearElement = document.createElement("p");
                    movieReleaseYearElement.innerHTML = `Realase year: <b> ${movie.Year}</b>`
                    movieCardElement.append(movieImageElement, movieTitleElement, movieReleaseYearElement,)
                    movieWrapperElement.appendChild(movieCardElement)


                }
                )






            } else {
                movieStatusElement.innerText = " "
                movieStatusElement.innerText = "404 movies not found!!!!!!!"
                inputElement.value=""
                console.log("movies not found")
            }

        })
})