import axios from "axios";

const app = axios.create({ baseURL: 'https://nc-news-back-end-project-oqj5.onrender.com/api'})

export const getArticles = () => {
    return app.get('/articles').then((response) => {
        return response.data.articles;
    })
}

export const getArticleById = (article_id) => {
    return app.get(`articles/${article_id}`).then((response) => {
        return response.data.article
    })
}

export const getCommentsByArticleId = (article_id) => {
    return app.get(`articles/${article_id}/comments`).then((response) => {
        return response.data.comments
    })
}