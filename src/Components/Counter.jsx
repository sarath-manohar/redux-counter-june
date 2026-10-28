import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue, reset } from '../Redux/slice/counterSlice'


function Counter() {

    const count= useSelector((state)=>state.counterReducer.count)
    const[amount,setAmount]=useState("")

    const dispatch=useDispatch()

    const handleIncrement=()=>{
        if(amount==""){
            alert("please fill missing fields")
        }else{
            dispatch(incrementByValue(Number(amount)))
            setAmount("")
        }
    }

    return (
        <div>
            <div>
                <h1 className='text-center fw-bolder mt-5 text-warning'>Counter-Application</h1>
                <div className="container border border-dark mt-2 p-5 rounded w-50">
                    <h2 className='text-center mt-5'>{count}</h2>
                    <div className='d-flex justify-content-around mt-5'>
                        <Button variant="success" onClick={()=>dispatch(increment())} >Increment</Button>
                        <Button variant="danger" onClick={()=>dispatch(reset())}>Reset</Button>
                        <Button variant="warning"  onClick={()=>dispatch(decrement())}>Decrement</Button>
                    </div>
                    <div className="d-flex mt-5 p-3">
                        <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className='form-control' placeholder='enter amount'
                        />
                        <Button className='btn btn-primary m-2' onClick={handleIncrement}>Increment By Amount</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
