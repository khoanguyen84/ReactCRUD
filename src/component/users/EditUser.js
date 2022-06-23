import { React, useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
function EditUser(){
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const { name, username, email, phone, website } = user;
    
    async function getUserById(){
        await axios.get(`http://localhost:3001/users/${id}`)   
            .then(function(response){
                setUser(response.data)
            })
    }
    useEffect(() => {
        getUserById();
    }, [])

    const onInputChange = function(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const updateUser = async () => {
        await axios.put(`http://localhost:3001/users/${id}`, user);
    }

    const onSubmit =  function(e){
        e.preventDefault();
        updateUser();
        navigate("/")
    }
    return (
        <div className="w-7 mx-auto shadow p-5">
            <div className='container'>
                <h2 className='text-center mb-4'>Update a User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input 
                            type="text"
                            className='form-control form-control-lg'
                            placeholder='Enter your Name'
                            name='name'
                            value={name}
                            onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="text"
                            className='form-control form-control-lg'
                            placeholder='Enter your Username'
                            name='username'
                            value={username}
                            onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="email"
                            className='form-control form-control-lg'
                            placeholder='Enter your Email'
                            name='email'
                            value={email}
                            onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="tel"
                            className='form-control form-control-lg'
                            placeholder='Enter your Phone'
                            name='phone'
                            value={phone}
                            onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="url"
                            className='form-control form-control-lg'
                            placeholder='Enter your Website'
                            name='website'
                            value={website}
                            onChange = {e => onInputChange(e)}
                        />
                    </div>    
                    <div className='d-block'>
                        <button className='btn btn-warning w-50'>Update User</button>
                        <Link className='btn btn-secondary w-50' to="/">Back to Home</Link>
                    </div>
                </form>

            </div>
        </div>    
    )
}

export default EditUser;