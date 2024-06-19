import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link, useParams } from "react-router-dom";

function Articles() {
    const [articles, setArticles] = useState([])
    let { topic } = useParams()

    useEffect(() => {
        getArticles(topic).then((articles) => {
            setArticles(articles)
        })
    }, [topic])

    return <section>
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id}>
                    <img src={article.article_img_url}></img>
                    <h2>{article.title}</h2>
                    <Link to={`/${article.article_id}`}>Read more...</Link>
                </li>
            })}
        </ul>
    </section>
}

export default Articles;