import { useEffect, useState } from "react";
import { voteOnArticle } from "../utils/api";

function Vote({article}) {

    const [votes, setVotes] = useState(article.votes)
    const [newVoteCount, setNewVoteCount] = useState(0)
    const [upvoteButtonDisable, setUpvoteButtonDisable] = useState(false)
    const [downvoteButtonDisable, setDownvoteButtonDisable] = useState(false)
    const [voteMsg, setVoteMsg] = useState('')
    
    useEffect(() => {
        setVotes(article.votes)
        setNewVoteCount(article.votes)
    }, [article])

    function handleUpvote() {
        let inc
        if(upvoteButtonDisable) {
            inc = -1
            setNewVoteCount(votes + inc)
            voteOnArticle(article.article_id, inc).then((updatedArticle) => {
                setVotes(updatedArticle.votes)
                setUpvoteButtonDisable(false)
                setDownvoteButtonDisable(false)
            }).catch(() => {
                setNewVoteCount(votes)
            })
        } else {
            if(downvoteButtonDisable) inc = 2
            else inc = 1
            setNewVoteCount(votes + inc)
            voteOnArticle(article.article_id, inc).then((updatedArticle) => {
                setVotes(updatedArticle.votes)
                setUpvoteButtonDisable(true)
                setDownvoteButtonDisable(false)
            }).catch(() => {
                setNewVoteCount(votes)
                setVoteMsg('An error occured whilst casting your vote - please try again')
            })
        }
    }

    function handleDownvote() {
        let inc
        if(downvoteButtonDisable) {
            inc = 1
            setNewVoteCount(votes + inc)
            voteOnArticle(article.article_id, inc).then((updatedArticle) => {
                setVotes(updatedArticle.votes)
                setUpvoteButtonDisable(false)
                setDownvoteButtonDisable(false)
            }).catch(() => {
                setNewVoteCount(votes)
            })
        } else {
            if(upvoteButtonDisable) inc = -2
            else inc = -1
            setNewVoteCount(votes + inc)
            voteOnArticle(article.article_id, inc).then((updatedArticle) => {
                setVotes(updatedArticle.votes)
                setDownvoteButtonDisable(true)
                setUpvoteButtonDisable(false)
            }).catch(() => {
                setNewVoteCount(votes)
                setVoteMsg('An error occured whilst casting your vote - please try again')
            })
        }
    }

    return <div className="article-element">Article rating: {newVoteCount} <button onClick={handleUpvote} className={upvoteButtonDisable ? "disabled" : "normal"}>Like</button><button onClick={handleDownvote} className={downvoteButtonDisable ? "disabled" : "normal"}>Dislike</button><p>{voteMsg}</p></div>
}

export default Vote;