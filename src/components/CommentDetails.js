import React from 'react'
import { Link } from 'react-router-dom'

const CommentDetails = ({ comments }) => {
    return (
        <div className='comments-page'>
            {comments?.map((comment) => (
                <div className='comment' key={comment.id}>

                    <p> Hi I'm {comment.name} </p>
                    <p> I Visited {comment.trip} </p>
                
                    <Link to={`/comments/${comment.id}`}>
                        <p> view more</p>
                    </Link>
               
                </div>

            ))}

        </div>
    )
}

export default CommentDetails
