import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

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
                    <img src={article.article_img_url}></img>
                    <h2>{article.title}</h2>
                </li>
            })}
        </ul>
    </section>
}

export default Articles;