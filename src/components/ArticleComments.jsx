import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import Comment from "./Comment";

function ArticleComments({article_id}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(article_id).then((comments) => {
            setComments(comments);
        })
    }, [])

    return <ul className="article-element">
        {comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment}/>
        })}
    </ul>
}

export default ArticleComments;