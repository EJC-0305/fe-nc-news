function Comment({comment}) {
    //console.log(comment);

    const date = new Date(comment.created_at);
    const parsedDate = date.toDateString();

    return <li className="comment">
        <p>{comment.body}</p>
        <p>- {comment.author}</p>
        <p>{parsedDate}</p>
        <p>Rating: {comment.votes}</p>
    </li>
}

export default Comment;