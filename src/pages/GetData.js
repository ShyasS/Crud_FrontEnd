import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './GetData.css';

const GetData = () => {
    const [users, setUsers] = useState('')
    useEffect(() => {
        axios.get('https://crud-backend-xn5l.onrender.com/api')
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDelete =(id)=>{
        axios.delete('https://crud-backend-xn5l.onrender.com/api/'+id)
        .then(function (response) {
          console.log(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    return (
        <div className=' vh-100 bgimg d-flex justify-content-center align-items-center' >
            <div className='col-lg-6  col-md-10 col-12 bg-white rounded p-3'>
                   <Link to={'/create'} className='btn btn-success'>Add+</Link>
                   <div className="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(users) && users.map((user, i) =>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success btn-sm me-2'>Edit</Link>
                                        <button onClick={()=>handleDelete(user._id)} className='btn btn-danger btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default GetData