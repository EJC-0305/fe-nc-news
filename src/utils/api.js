import axios from "axios";

const app = axios.create({ baseURL: 'https://nc-news-back-end-project-oqj5.onrender.com/api'})

export const getArticles = () => {
    return app.get('/articles').then((response) => {
        return response.data.articles;
    })
}