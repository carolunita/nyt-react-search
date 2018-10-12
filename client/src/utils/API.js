import axios from "axios";

const api = {
    // Query NYT API
    // Grabs articles from the New York Times using the the New York Times article search API.
    getArticles: function (query, begin, end) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        const APIKEY = "?api-key=e75e4401f3df4ac58c0deafbb225cad9";
        return axios.get(BASEURL + APIKEY + "&q=" + query + "&begin_date=" + begin + "0101&end_date=" + end + "0101");
    },
    // Retrieves saved articles from the db
    // Saves an article to the database
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData)
    },
    // Retrieves saved articles from the db
    getSavedArticles: function() {
        return axios.get("/api/articles");
    },
};

export default api;