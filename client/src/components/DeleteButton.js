import React from 'react'
import axios from 'axios';

export default props => {

    const { pirateId, successCallback } = props;

    const deletePirate = e => {
        axios.delete('http://localhost:8000/api/pirate/' + pirateId)
            .then(res => {
                successCallback();
            })
            .catch(err => console.error(err));
    }

    return (
        <button className='btn btn-danger btn-sm' onClick={deletePirate}>
            Walk the Plank
        </button>
    )
}