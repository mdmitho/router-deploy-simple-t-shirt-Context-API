import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>anty</h1>
            <p>House : {house}</p>
            <p><small>Gift : {ring}</small></p>
        </div>
    );
};

export default Aunty;