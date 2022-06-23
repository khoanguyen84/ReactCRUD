import React , { useState,useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function ViewUser(){
    const [user, setUser] = useState({
        name:"",
        username: "",
        email:"",
        phone:"",
        website:""
    });
    const { name, username, email, phone, website } = user;
    const getUserById = async function(){
        await axios.get(`http://localhost:3001/users/${id}`)
            .then(function(response){
                setUser(response.data);
            })
    }

    useEffect(() => {
        getUserById()
    }, [])

    const { id } = useParams();
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
            <h2 className='text-center mb-4'>User Id: {id}</h2>
            <hr/>
            <ul className="list-group w-100">
                <li className="list-group-item">Name: {name}</li>
                <li className="list-group-item">Username: {username}</li>
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
                <li className="list-group-item">Website: {website}</li>
            </ul>
        </div>
    )
}

export default ViewUser;