import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

function FilterByTopic() {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((topicsArr) => {
            setTopics(topicsArr)
        })
    }, [])
    
    return<nav>
        <Link to='/'>all</Link>
        {topics.map((topic) => {
            return <Link key={topic.slug} to={`/${topic.slug}`} >{topic.slug}</Link>
        })}
    </nav>
}

export default FilterByTopic;