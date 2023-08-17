import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';


export default function Addanddelete() {
    const dispatch=useDispatch();
    // const action=bindActionCreators(actionCreators,dispatch)
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='container'>
        <h1>Deposit or withdraw money</h1>
      {/* <button className="btn btn-primary my-2 mx-4" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      <span>Update money</span>
      <button className="btn btn-primary my-2 mx-4"onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
       {/* <button className="btn btn-primary my-2 mx-4" onClick={()=>{action.withdrawMoney(100)}}>-</button>
      <span>Update money</span>
      <button className="btn btn-primary my-2 mx-4"onClick={()=>{action.depositMoney(100)}}>+</button> */}
         <button className="btn btn-primary my-2 mx-4" onClick={()=>{withdrawMoney(100)}}>-</button>
      <span>Update money</span>
      <button className="btn btn-primary my-2 mx-4"onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  );
}
