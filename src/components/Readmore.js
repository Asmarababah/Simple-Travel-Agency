import React from 'react'
import useFetch from "./useFetch";
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Readmore = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: comment, isLoading, error } = useFetch('http://localhost:8000/comments/' + id);

    const deleteComment = () => {
        fetch('http://localhost:8000/comments/' + comment.id, { method: 'DELETE' }).
            then(() => { navigate('/comment') })
    }

    const editComment = () => {
        navigate('/edit/' + comment.id)
    }

  return (
    <div >
    {isLoading && <div> Loading ... </div>}
    {error && <div> {error} </div>}
    {comment && (
    <div className='article1'>
        <h6> {comment.name} </h6>
        <p> {comment.trip} </p>
        <p> {comment.details}</p>
        <p> {comment.email}</p>
        <div>{comment.picture} </div>
        <div className='button1'>
        <button style={{width: "100px", textAlign: "center"}} onClick={deleteComment}> Delete</button>
        <button style={{width: "100px", textAlign: "center"}} onClick={editComment}> Edit</button>
        </div>
    </div>)}
</div>
  )
}

export default Readmore
