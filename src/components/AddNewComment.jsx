import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { postNewComment } from "../utils/api";
import { TextField } from "@mui/material";

function AddNewComment({article_id, setComments, comments}) {

    const [postCommentMsg, setPostCommentMsg] = useState('')
    const [tempDisableButton, setTempDisableButton] = useState(false)
    const [commentInput, setCommentInput] = useState('')
    const {user} = useContext(UserContext);

    function handleChange(event) {
        setCommentInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTempDisableButton(true)
        postNewComment(article_id, user.username, commentInput).then((newComment) => {
            setCommentInput('');
            setComments([newComment, ...comments])
            setPostCommentMsg('Comment posted successfully! See it below')
            setTimeout(() => {
                setPostCommentMsg('')
                setTempDisableButton(false)
            }, 5000)
        }).catch(() => {
            setPostCommentMsg('There was an error posting your comment. Please wait then try again')
            setTimeout(() => {
                setPostCommentMsg('')
                setTempDisableButton(false)
            }, 5000)
        })
    }

    return <form onSubmit={handleSubmit}>
        <label>Share your views on this article:
            <TextField id="comment-input" variant="outlined" value={commentInput} onChange={handleChange} fullWidth required multiline/>
        </label>
        <br></br>
        <p>{postCommentMsg}</p>
        <button className="submit" disabled={tempDisableButton}>Submit</button>
    </form>
}

export default AddNewComment;