import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleComments from "./ArticleComments";
import Vote from "./Vote";

function Article() {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle(article)
        })
    }, [])

    const date = new Date(article.created_at);
    const parsedDate = date.toDateString();
    
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