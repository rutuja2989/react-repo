import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailSlice';

export default function Getelement() {
    const dispatch=useDispatch();

    const {users,loading} = useSelector((state)=>state.app);

   useEffect(() => {
     dispatch(showUser());
   }, []);

if(loading){
    return <h2>loading</h2>
}

  return (
    <div className='container my-3'> 
     {users && users.map((ele)=>(<div className="card my-2" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">name: {ele.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">email: {ele.email}</h6>
    <p className="card-text">age: {ele.age}</p>
  </div>
</div>))}
    </div>
  );
}
