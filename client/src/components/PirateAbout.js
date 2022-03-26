import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import PirateForm from '../components/PirateForm';
import DeleteButton from '../components/DeleteButton';
import {
    Link
} from "react-router-dom";

const PirateAbout = (props) => {
    const history = useHistory();
    const { id } = useParams();
    let pirateId = id;
    
    const [pirate, setPirate] = useState();
    const [loaded, setLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState([]);
    // const [pirateId, setId] = useState(id);


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
                history.push(`/pirates`);
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
        loaded === true ?
            <div>
                <div>
                    <div className='d-flex flex-row justify-content-center align-content-center mb-3'>
                        <h1>{pirate.name}</h1>
                        <Link to="/pirates">Return Home</Link>
                    </div>
                    <div className='d-flex flex-row justify-content-center align-items-center gap-5'>
                        <div className='d-flex flex-column'>
                            <img src={pirate.img} width={300} height={200} />
                            "{pirate.catchPhrase}"
                        </div>
                        <div className='d-flex flex-column gap-3'>
                            <h2>About</h2>
                            <div>Position: {pirate.position}</div>
                            <div>Treasures: {pirate.chests}</div>
                            <div className='d-flex flex-row'>Peg Leg: {
                                pirate.pegLeg === true ?
                                    <div className='d-flex flex-row'>
                                        <p> Yes</p>
                                        <button onClick={() => updatePirate( {pegLeg: false} )} className='btn btn-danger gap-2'>No</button>
                                    </div>
                                    :
                                    <div className='d-flex flex-row gap-2'>
                                        <p> No</p>
                                        <button onClick={() => updatePirate( {pegLeg: true} )} className='btn btn-primary'>Yes</button>
                                        {/* { name, img, chests, position, pegLeg, eyePatch, hookHand, catchPhrase } */}
                                    </div>
                            }
                            </div>
                            <div className='d-flex flex-row'>Eye Patch: {
                                pirate.eyePatch === true ?
                                <div className='d-flex flex-row'>
                                    <p> Yes</p>
                                    <button onClick={() => updatePirate( {eyePatch: false} )} className='btn btn-danger gap-2'>No</button>
                                </div>
                                :
                                <div className='d-flex flex-row gap-2'>
                                    <p> No</p>
                                    <button onClick={() => updatePirate( {eyePatch: true} )} className='btn btn-primary gap-2'>Yes</button>
                                </div>
                            }
                            </div>
                            <div className='d-flex flex-row'>Hook Hand: {
                                pirate.hookHand === true ?
                                <div className='d-flex flex-row'>
                                    <p> Yes</p>
                                    <button onClick={() => updatePirate( {hookHand: false} )} className='btn btn-danger gap-2'>No</button>
                                </div>
                                :
                                <div className='d-flex flex-row gap-2'>
                                    <p> No</p>
                                    <button onClick={() => updatePirate( {hookHand: true} )} className='btn btn-primary gap-2'>Yes</button>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>
                <p>The API call was unsuccessful.</p>
                <Link to="/pirates">Return Home</Link>
            </div>
    )
}

export default PirateAbout;