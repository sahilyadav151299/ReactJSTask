import React, { useEffect, useState } from "react";
import UUID from "../services/UUID";
import ValidateData from '../services/ValidateData';

const AddUserForm = () => {

  // states to store user form data
  const uniqueID = UUID();
  const [username, setUserame] = useState(''); 
  const [birthdate, setBirthdate] = useState('');
  const [department, setDepartment] = useState('');
  const [expirence, setExpirence] = useState('');

  // state to store array of users object
  const [users, setUsers] = useState(() => {
    try{
      return JSON.parse(localStorage.getItem('users')) ?? [];
    }catch{
      return [];
    }
  });

  // executes each time users array changed
  // stores new added user data when added
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    setUserame('');setBirthdate('');setDepartment('');setExpirence('');
  },[users]);

  // executes on submit of the user form data
  function addUser(){
    // validates the user data fetched 
    if(ValidateData(username, birthdate, department, expirence)){

      // holds user data in a user object as a new user
      const user = {
        uniqueID,
        username,
        birthdate,
        department,
        expirence,
        versions: []
      }

      // copies old users array along with new user added
      // this causes useEffect() to be executed
      setUsers([...users, user]);
      alert('User Added Succesfully');
    }
  }  

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Enter Details</h2>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Fullname"
              name="username"
              value={username}
              onChange={(e) => setUserame(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder="Choose Your Birthdate"
              name="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Department"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value.trim())}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your Expirence In Years"
              name="expirence"
              value={expirence}
              onChange={(e) => setExpirence(e.target.value)}
            />
          </div>

          <button type="button" className="btn btn-danger btn-block" onClick={addUser}>
            Add User
          </button>

      </div>
    </div>
  );
};

export default AddUserForm;
