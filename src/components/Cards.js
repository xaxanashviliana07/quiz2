import React from 'react';

import './Cards.css';

function ConceptItem(props) {
    return (
        <div className='concept-item'>
            <div className='concept'>
                <img src={props.image} alt="TODO: TITLE" />  
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default ConceptItem