
import React from "react";

import "./componentesStyle.css";

function TeamCard(infos){
    
    const {name, description, team} = infos.infos;
    
    function showDetails(){
        
    }
    return(
        <>
           
                <div className="projectCard">
                    <h1>{name}</h1>
                    <h3>Equipe: {team}</h3>
                    <div className="Descript"><p>{description}</p></div>
                    
                    
                </div>
        </>
    )
}

export default TeamCard