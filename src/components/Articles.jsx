import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { formatTopic } from "../utils/utilFuncs";
import SortBy from "./SortBy";
import Error from "./Error.jsx"

function Articles() {
    const [articles, setArticles] = useState([])
    let { topic } = useParams()
    const [error, setError] = useState()

    const [searchParams, setSearchParams] = useSearchParams();
    const orderBy = searchParams.get('orderBy');
    const sort_by = searchParams.get('sort_by');

    useEffect(() => {
        getArticles(topic, orderBy, sort_by).then((articles) => {
            setArticles(articles)
        }).catch((err) => {
            setError(err)
        })
    }, [topic, sort_by, orderBy])

    let formattedTopic;
    if(topic) formattedTopic = formatTopic(topic);

    if(error) return <Error error={error} setError={setError}/>
    return <section className="articles-section">
        <div className="topicsort">
            {topic ? <h2 className="currentTopic">{formattedTopic} Articles</h2> : <h2 className="currentTopic">All Articles</h2>}
            <SortBy topic={topic} searchParams={searchParams} setSearchParams={setSearchParams}/>
        </div>
        
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id}>
                    <img src={article.article_img_url}></img>
                    <h2 className="articleTitle">{article.title}</h2>
                    <p>{new Date(article.created_at).toDateString()}</p>
                    <p>Rating: {article.votes} | Comments: {article.comment_count}</p>
                    <Link to={`/articles/${article.article_id}`}>Read more...</Link>
                </li>
            })}
        </ul>
    </section>
}

export default Articles;