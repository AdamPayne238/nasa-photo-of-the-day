import React from 'react';

function NasaCard(props){
    console.log(props);
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <img src={props.url} alt="Nasa" />
            <p>
                {props.explanation}
            </p>
        </div>
    );
}

export default NasaCard;