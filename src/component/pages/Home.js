import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers () {
    await axios.get("http://localhost:3001/users")
    .then(function (response) {
      setUsers(response.data.sort(function(user_1, user_2){
        return user_2.id - user_1.id;
      }));
    });
  }

  useEffect(() => {
    getUsers()
  }, []);

  async function removeUser(id){
    const confirmed = window.confirm("Are you sure remove this user?")
    if(confirmed){
      await axios.delete(`http://localhost:3001/users/${id}`);
      getUsers();
    }
    
  }
  return (
    <div className="container">
      <div className="pt-1">
        <table className="table">
          <thead className="thead-dark">
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { users.map(function(user, index){
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary btn-sm mx-1" to={`user/view/${user.id}`}><i className="fa fa-eye"></i></Link>
                    <Link className="btn btn-warning btn-sm mx-1" to={`/user/edit/${user.id}`}><i className="fa fa-edit"></i></Link>
                    <Link className="btn btn-danger btn-sm mx-1" to="" onClick={() => { removeUser(user.id) }}><i className="fa fa-trash"></i></Link>
                  </td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
