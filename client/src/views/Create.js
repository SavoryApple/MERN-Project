import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import PirateForm from '../components/PirateForm';
import DeleteButton from '../components/DeleteButton';
import {
    Link
} from "react-router-dom";


const Create = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [pirate, setPirate] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + id)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const createPirate = pirate => {
        axios.post('http://localhost:8000/api/pirate/create', pirate)
            .then(res => {
                console.log("created user response:", res.data)
                history.push("/pirates");
            })
            .catch(err => {
                console.log("ERROR:", err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                
            });
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Add a new pirate:</h1>
            <hr />
            <PirateForm
                onSubmitProp={createPirate}
                initialName=""
                initialImg=""
                initialChests="0"
                initialPosition="choose"
                initialPegLeg={true}
                initialEyePatch={true}
                initialHookHand={true}
                initialCatchPhrase=""
            />
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <hr />
            <Link to='/pirates'>Home</Link>
        </div>
    )
}

export default Create;