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

export const voteOnArticle = (article_id, vote) => {
    return app.patch(`articles/${article_id}`, {inc_votes: vote}).then((response) => {
        return response.data.article;
    })
}

export const postNewComment = (article_id, username, body) => {
    return app.post(`articles/${article_id}/comments`, {username: username, body: body}).then((response) => {
        return response.data.new_comment;
    })
}

export const deleteComment = (comment_id) => {
    return app.delete(`comments/${comment_id}`)
}