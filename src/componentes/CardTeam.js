
import React from "react";

import "./componentesStyle.css";

function TeamCard(infos){
    
    const {name, description} = infos.infos;
    
   
    return(
        <>
            <div className="grid2">
                <h1>{name}</h1>
                <p>{description}</p>
            
                
                
            </div>
        </>
    )
}

export default TeamCard