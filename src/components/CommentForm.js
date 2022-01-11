import React, {useState} from "react"

const CommentForm = ({onCommentSubmit}) => {

    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")
    const handleAuthorChange = (event) => {
            setAuthor(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const authorToSubmit = author.trim()
        const textToSubmit = text.trim()
        // if (!authorToSubmit || !textToSubmit){
        //     return 
        // }
        onCommentSubmit( {
            author: authorToSubmit,
            text: textToSubmit
        }
        )
        setAuthor("");
        setText("");
    }

    return(
        <form className="comment-form" onSubmit={handleFormSubmit}>
            <input type="text" value={author} placeholder="Your Name" onChange={handleAuthorChange}/>

            <input type="text" value={text} placeholder="Comment" onChange={handleTextChange}/>

            <input type="submit" value="Submit"/>
        </form>
    )
}


export default CommentForm;