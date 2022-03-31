import React from 'react';
import Special from '../Special/Soecial'
const MySelf = ({house,ornament}) => {
    return (
        <div>
            <h1>My self</h1>
            <p><small>house  : {house}</small></p>
            <Special ornament={ornament}></Special>

        </div>
    );
};

export default MySelf;