import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import UUID from "../services/UUID";
import ValidateData from "../services/ValidateData";

const EditUserForm = () => {

  // hook used to redirect the user to the specific path
  let history = useHistory();

  // destructring the id attribute from the URL
  const { uniqueID: id } = useParams();

  // fetch all users and find that one needs to be edited along with all the old versions 
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => user.uniqueID == id);
  const { versions } = user;

  // rest users which are not mean't to be updated
  const restUsers = users.filter((user) => user.uniqueID != id);

  // states use to holds the updates user data and populating the current data
  const uniqueID = UUID();
  const [username, setUserame] = useState(user.username);
  const [birthdate, setBirthdate] = useState(user.birthdate);
  const [department, setDepartment] = useState(user.department);
  const [expirence, setExpirence] = useState(user.expirence);

  // on click of update button this will executes
  function updateUser(){
    // validates updated user data
    if (ValidateData(username, birthdate, department, expirence)) {

      // copies all the old users detail along with current user data
      let userVersions = [...user.versions, user];
    
      const userUpdate = {
        uniqueID,
        username,
        birthdate,
        department,
        expirence,
        versions: userVersions,
      };

      // copy all the old users objects with updates users
      const newUsers = [...restUsers, userUpdate];
      localStorage.setItem("users", JSON.stringify(newUsers));
      setUserame("");
      setBirthdate("");
      setDepartment("");
      setExpirence("");
      alert("User Updated Succesfully");
      // redirected to the list component
      history.push("/list");
    }
  };

  function currentData(){
    // display current user data options
    setUserame(user.username);
    setBirthdate(user.birthdate);
    setDepartment(user.department);
    setExpirence(user.expirence);
  }

  function showData(version){
    // dispalys all the old user data options
    const { username, birthdate, department, expirence } = version;
    setUserame(username);
    setBirthdate(birthdate);
    setDepartment(department);
    setExpirence(expirence);
  }

  return (
    <div>
        <div className='sidebar'>
            <h3 className='center_h3'>Old Versions</h3>
            <div className='container'>
                <button type="button" className="btn btn-danger btn-block" onClick={() => currentData()}>
                        Current Version
                </button>
                {
                    versions.map((version, index) => (
                        <button key={index} type="button" className="btn btn-danger btn-block" onClick={() => showData(version)}>
                        Version {index+1}
                        </button>
                    ))
                }
            </div>
        </div>

      <div className="container">
        <div className="w-50 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Update Details</h2>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => setUserame(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              className="form-control"
              name="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value.trim())}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              name="expirence"
              value={expirence}
              onChange={(e) => setExpirence(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-warning btn-block"
            onClick={updateUser}
          >
            Update User
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
