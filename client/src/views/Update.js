import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import PirateForm from '../components/PirateForm';
import DeleteButton from '../components/DeleteButton';
import {
    Link
} from "react-router-dom";

const Update = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [pirate, setPirate] = useState();
    const [loaded, setLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + id)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const updatePirate = pirate => {
        axios.put('http://localhost:8000/api/pirate/' + id, pirate)
            .then(res => {
                console.log(res)
                setPirate(pirate);
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
                setIsError(true);
            });
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Favorite Pirates</h1>
            <hr />
            <h3>Update Pirate</h3>
            {loaded && (
                <PirateForm
                    onSubmitProp={updatePirate}
                    initialName={pirate.name}
                    initialImg={pirate.img}
                    initialChests={pirate.chests}
                    initialPegLeg={pirate.pegLeg}
                    initialEyePatch={pirate.eyePatch}
                    initialookHand={pirate.hookHand}
                    initialCatchPhrase={pirate.catchPhrase}
                />
                // name, img, chests, position, pegLeg, eyePatch, hookHand, catchPhrase
            )}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <hr />
            <Link to='/pirates'>Home</Link>
        </div>
    )
}

export default Update;