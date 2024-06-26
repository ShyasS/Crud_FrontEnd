import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateData = () => {
  const {id} = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://crud-backend-xn5l.onrender.com/api/'+id)
  .then( (response)=> {
    console.log(response.data.name)
    setName(response.data.name)
    setEmail(response.data.email)
  })
  .catch( (error) =>{
    console.log(error);
  })
    },[])

    const handleSubmit = async() => {
        await axios.put('https://crud-backend-xn5l.onrender.com/api/'+id, {name, email})
        .then( (response) => {
          console.log(response.data);
          navigate('/')
        })
        .catch( (error) => {
          console.log(error);
        })
       }
    return (
        <div className='vh-100 bg-primary d-flex justify-content-center align-items-center' >
            <div className='col-md-8 col-lg-6 col-xl-6 col-12 bg-white rounded p-3'>

                <h2>Update Data</h2>
                <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input type="email" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Enter the name" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" placeholder="Enter the email" />
                </div>
                <div class="mb-3">
                    <button onClick={handleSubmit} className='btn btn-success'>Submit</button>
                </div>


            </div>
        </div>
    )
}

export default UpdateData