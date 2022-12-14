import axios from "axios";  

const SEARCH_URI = 'https://api.github.com/search/users'

const search = (query) => {
    const config ={
        method: "GET",
        url: `${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`,
        headers: { "Content-type" : "application/json"},
       crossdomain: true,
    }
    return axios(config)
}

export {search}