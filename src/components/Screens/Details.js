import React from 'react';
import { useHistory } from 'react-router-dom';

const Details = () => {
    const history = useHistory();
    return(
        <div>
            <button onClick={() => history.goBack()}>Back</button>
            <h1>Details Screen</h1>
        </div>

    );
};

export default Details;