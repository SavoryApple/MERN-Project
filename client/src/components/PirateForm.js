import React, { useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

export default props => {
    const { initialName, initialImg, initialChests, initialPosition, initialPegLeg, initialEyePatch, initialHookHand, initialCatchPhrase, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [img, setImg] = useState(initialImg);
    const [chests, setChests] = useState(initialChests);
    const [position, setPosition] = useState(initialPosition);
    const [pegLeg, setPegLeg] = useState(initialPegLeg);
    const [eyePatch, setEyePatch] = useState(initialEyePatch);
    const [hookHand, setHookHand] = useState(initialHookHand);
    const [catchPhrase, setCatchPhrase] = useState(initialCatchPhrase);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        // console.log(firstName, lastName, breed, checkbox)
        onSubmitProp({ name, img, chests, position, pegLeg, eyePatch, hookHand, catchPhrase });
    }

    //onChange to update firstName and lastName
    return (
        <div className='w-50'>
            <hr></hr>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>Image</label><br />
                    <input type="text" onChange={(e) => setImg(e.target.value)} value={img} />
                </p>
                <p>
                    <label>Chests</label><br />
                    <input type="number" onChange={(e) => setChests(e.target.value)} value={chests} />
                </p>
                <p>
                    <label>Catch Phrase</label><br />
                    <input type="text" onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase} />
                </p>
                <div className='d-flex flex-row justify-content-between'>
                    <select onChange={(e) => setPosition(e.target.value)} name="search" id="search" value={position}>
                        <option value="choose">Choose...</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                    <div className="form-check d-flex flex-row justify-content-between">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <input onChange={(e) => setPegLeg(e.target.checked)} className="form-check-input" type="checkbox" checked={pegLeg} id="flexCheckDefault" />
                            Peg Leg
                        </label>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <input onChange={(e) => setEyePatch(e.target.checked)} className="form-check-input" type="checkbox" checked={eyePatch} id="flexCheckDefault" />
                            Eye Patch
                        </label>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <input onChange={(e) => setHookHand(e.target.checked)} className="form-check-input" type="checkbox" checked={hookHand} id="flexCheckDefault" />
                            Hook Hand
                        </label>
                    </div>
                <hr />
                <div className='d-flex flex-row justify-content-between'>
                    <input className='btn btn-primary' type="submit" />
                    <Link to='/pirates' className='btn btn-danger' >Cancel</Link>
                </div>
            </form>
        </div>
    )
}