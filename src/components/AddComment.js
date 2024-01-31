import React from 'react'
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const AddComment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [trip, setTrip] = useState("");
    const [picture , setPicture] = useState("");
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = { name, email, details, trip, picture };
        setLoading(true);
        setTimeout(() => {

            fetch('http://localhost:8000/comments', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(comment)
            }).then(() => {
                setLoading(false);
                navigate('/comment')
            });

        }, 1000);
    }

    return (
        <div className='add'>
            <h2> Add New Experince </h2>
            <form onSubmit={handleSubmit}>
                <label > Your name </label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <label> Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='name@example.com' />

                <label > How was your trip with us? </label>
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder='Write your Experince here' cols="10" rows="5"> </textarea>

<label>insert picture from your trip</label>
<input type="file" value={picture} onChange={(e) => setPicture(e.target.value)} />

                <label > Where was your trip?</label>
                <select value={trip} onChange={(e) => setTrip(e.target.value)} >
                    <option defaultValue > Select a place </option>
                    <option>Jordan</option>
                    <option>Eygpt</option>
                    <option>UAE</option>
                    <option>Turkey</option>
                    <option>Lebanon</option>
                    <option>Antalya</option>
                    <option>Istanbul</option>
                    <option>Aqaba</option>
                    <option>Wadi-Rum</option>
                    <option>Srylanka</option>
                </select>

                {Loading && <button> Adding.... </button>}
                {!Loading && <button>Add Comment</button>}

            </form>

        </div>
    )
}

export default AddComment
