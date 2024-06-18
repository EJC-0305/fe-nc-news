import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import Comment from "./Comment";
import AddNewComment from "./AddNewComment";

function ArticleComments({article_id}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(article_id).then((comments) => {
            setComments(comments);
        })
    }, [comments])

    return <section className="article-element">
        <AddNewComment article_id={article_id}/>
        <ul>
            {comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment}/>
            })}
        </ul>
        </section>
}

export default ArticleComments;