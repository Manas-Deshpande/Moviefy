let api = "https://www.omdbapi.com/?apikey=75fa2a6b&t="
let title = document.getElementById("title")
let director = document.getElementById("director")
let collection = document.getElementById("collection")
let desc = document.getElementById("desc")
let genre = document.getElementById("genre")
let awards = document.getElementById("awards")
let writer = document.getElementById("writer")
let date = document.getElementById("date")
let ratings = document.getElementById("ratings")
let poster = document.getElementById("poster")
let actor = document.getElementById("actors")

function searchMovie()
 {

    let movie_name = document.getElementById("movieName") 
    let r = api+movie_name.value
    fetch(r).then((data)=>
    {
        return data.json()
    }).then((data)=>
      {
        title.innerText=data.Title //  id.innertext = data.(write names acc. to imdb api website names)     title is the id here
        date.innerText=data.Released
        director.innerText=data.Director
        awards.innerText=data.Awards
        writer.innerText=data.Writer
        actors.innerText=data.Actors
        desc.innerText=data.Plot
        genre.innerText=data.Genre
        collection.innerText=data.BoxOffice
        ratings.innerText=data.imdbRating
        title.innerText=data.Title
        poster.src=data.Poster
      
    movie_name.value=""
    
      })
 }
