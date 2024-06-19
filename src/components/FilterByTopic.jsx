import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import { formatTopic } from "../utils/utilFuncs";

function FilterByTopic() {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((topicsArr) => {
            setTopics(topicsArr)
        })
    }, [])
    
    return<nav>
        <Link to='/'>All</Link>
        {topics.map((topic) => {
            const formattedTopic = formatTopic(topic.slug)
            return <Link key={topic.slug} to={`/${topic.slug}`} >{formattedTopic}</Link>
        })}
    </nav>
}

export default FilterByTopic;