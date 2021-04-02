import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const UserList = () => {

  // fetch all users to list them
  const [users, setUsers] = useState(() => {
      try{
        return JSON.parse(localStorage.getItem('users'));
      }catch(e){
        return [];
      }
  })  

  // on delete button click this will executes
  function deleteUser(id){
      setUsers(users.filter((user) => id !== user.uniqueID)); 
      alert('User Deleted Successfully!');   
  }

  // executes each time users array changed
  // stores rest user data after deleting the specific one
  useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // if no users, this will execute
  if(users.length === 0)
  return <h1 className='center'>No User Found</h1>

  return (
    <div className="container">
      <div className="py-4">
        <table className="table p-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Department</th>
              <th scope="col">Expirence</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
        
          <tbody>
            {
              // render user data in table rows
                users.map((user, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.username}</td>
                        <td>{user.birthdate}</td>
                        <td>{user.department}</td>
                        <td>{user.expirence}</td>
                        <td>
                        <Link className="btn btn-outline-primary mr-2" to={`/edit/${user.uniqueID}`}>Edit</Link>
                        <Link className="btn btn-outline-danger" to='#' onClick={() => deleteUser(user.uniqueID)}>Delete</Link>
                        </td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
