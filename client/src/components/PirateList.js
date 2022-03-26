import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PirateList = (props) => {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setPirates(res.data.pirateList))
            .catch(err => console.log(err));
    }, [])

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id != pirateId))
    }

    return (
        <div className='d-flex flex-column align-items-center' >
            <div className='d-flex flex-row'>
                <h1>Pirate Crew</h1>
                <Link to={"/new/pirate"}>
                    <p>Add a pirate</p>
                </Link>
            </div>
            <hr/>
            {pirates.map((pirate, idx) => {
                return (
                    <div className='w-50 d-flex flex-row justify-content-between align-items-center' key={idx} >
                        <img width={100} src={pirate.img}/>
                        {pirate.name}
                        <Link className='btn btn-primary' to={"/pirate/" + pirate._id}>view</Link>
                        <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)} />
                        {pirate.breed}
                        {
                            pirate.isImportant == true ?
                                <p>🌟</p>
                                :
                                <></>
                        }
                    </div>
                )
            }
            )}
        </div>

    )

}

export default PirateList;



{/* <table class="table">
    <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table> */}










