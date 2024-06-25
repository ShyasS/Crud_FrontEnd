import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetData = () => {
    const [users, setUsers] = useState('')
    useEffect(() => {
        axios.get('http://localhost:5001/api')
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDelete =(id)=>{
        axios.delete('http://localhost:5001/api/'+id)
        .then(function (response) {
          console.log(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    return (
        <div className='vh-100 bg-primary d-flex justify-content-center align-items-center' >
            <div className='col-md-6 col-12 bg-white rounded p-3'>
                   <Link to={'/create'} className='btn btn-success'>Add+</Link>
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
    )
}

export default GetData