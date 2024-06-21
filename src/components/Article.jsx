import { redirect, useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleComments from "./ArticleComments";
import Vote from "./Vote";
import Error from "./Error.jsx"

function Article() {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const navigate = useNavigate();
    const [error, setError] = useState();

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle(article)
        }).catch((err) => {
            setError(err);
        })
    }, [])

    const date = new Date(article.created_at);
    const parsedDate = date.toDateString();
    
    if(error) return <Error error={error} setError={setError}/>
    return <article>
        <h2 className="article-element">{article.title}</h2>
        <p className="article-element">by {article.author}</p>
        <p className="article-element">published on {parsedDate}</p>
        <img src={article.article_img_url} className="articleImg"></img>
        <p className="article-element">{article.body}</p>
        <Vote article={article}/>
        <ArticleComments article_id={article_id}/>
    </article>
}

export default Article;