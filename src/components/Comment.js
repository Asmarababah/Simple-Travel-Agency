import React from 'react'
import { Link } from "react-router-dom"
import useFetch from '../components/useFetch'
import CommentDetails from '../components/CommentDetails'

const Comment = () => {
  
  const { data: comments, isLoading, error } = useFetch("http://localhost:8000/comments")

  return (
    <div className='h1-link'>
      <h1> Experience of users </h1>
      {isLoading && <div> is Loading .... </div>}
      {error && <div> {error} </div>}
      {comments && <CommentDetails comments={comments} />}
      <Link to="/addcomment"> <button> Click to Add Your Experience</button> </Link>

    </div>
  )
}

export default Comment
