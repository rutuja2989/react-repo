import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

function Create() {

    const [users,setUsers]=useState({});

    const dispatch=useDispatch();

    const navigate=useNavigate();
    
    const getUserData=(e)=>{
        setUsers({...users, [e.target.name]:e.target.value})
    }
 
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(users)
      dispatch(createUser(users));
      navigate("/getelement");
    }
  return (
    <div className="container mx-auto">
    <form className="w-50 my-5" >
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" name="name" className="form-control" onChange={getUserData} />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" name="email" className="form-control" onChange={getUserData} />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
  <input type="number" name="age" className="form-control" onChange={getUserData} />
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="female" id="flexRadioDefault1" onChange={getUserData} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="male" id="flexRadioDefault2" checked onChange={getUserData} />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Female
  </label>
</div>
<button className="btn btn-outline-success my-3" type="submit" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  );
}

export default Create;

