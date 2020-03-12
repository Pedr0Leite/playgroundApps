var puppeteer = require('puppeteer');






var axios = require('axios');
var movie = 'eternal sunshine of the spotless mind';

(async function getMovie(movie){
    let apiKey = 'ed4903dc';
    let movieName = movie.replace(/\W+/g, '+');
    const URL = `http://www.omdbapi.com/?t=${movieName}?&apikey=${apiKey}`;

    await axios.get(URL).then((value)=>{
        console.log(value.data);
        return value.data;
    })
})(movie);