import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { deleteComment } from "../utils/api";

function Comment({comment}) {

    const {user} = useContext(UserContext)
    const [deleted, setDeleted] = useState(false)
    const [deleteMsg, setDeleteMsg] = useState('')
    const [deleteButtonDisable, setDeleteButtonDisable] = useState(false)

    const date = new Date(comment.created_at);
    const parsedDate = date.toDateString();

    function handleDelete() {
        setDeleteButtonDisable(true)
        setDeleted(true)
        deleteComment(comment.comment_id).then(() => {
            setDeleteMsg('Comment deleted')
        }).catch(() => {
            setDeleteMsg('There was a problem deleting your comment')
            setDeleted(false)
            setTimeout(() => {
                setDeleteButtonDisable(false)
            }, 5000)
        })
    }

    return <li className={deleted ? "deleted" : "comment"}>
        <p className="commentBody">{comment.body}</p>
        <p>- {comment.author}</p>
        <p>{parsedDate}</p>
        <p>Rating: {comment.votes}</p>
        {deleteMsg ? <p className="deleteMsg">{deleteMsg}</p> : <></>}
        {comment.author === user.username && !deleted ? <button onClick={handleDelete} disabled={deleteButtonDisable}>Delete</button> : <></>}
    </li>
}

export default Comment;