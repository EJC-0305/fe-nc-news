import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";

function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
        })
    }, [])

    return <section>
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id}>
                    <Link to={`/${article.article_id}`}>
                        <img src={article.article_img_url}></img>
                        <h2>{article.title}</h2>
                    </Link>
                </li>
            })}
        </ul>
    </section>
}

export default Articles;