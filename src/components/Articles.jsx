import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import { formatTopic } from "../utils/utilFuncs";

function Articles() {
    const [articles, setArticles] = useState([])
    let { topic } = useParams()

    useEffect(() => {
        getArticles(topic).then((articles) => {
            setArticles(articles)
        })
    }, [topic])

    let formattedTopic;
    if(topic) formattedTopic = formatTopic(topic);

    return <section>
        {topic ? <h2>{formattedTopic} Articles</h2> : <></>}
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id}>
                    <img src={article.article_img_url}></img>
                    <h2>{article.title}</h2>
                    <Link to={`/articles/${article.article_id}`}>Read more...</Link>
                </li>
            })}
        </ul>
    </section>
}

export default Articles;