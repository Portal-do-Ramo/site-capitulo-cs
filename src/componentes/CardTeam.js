import { useState } from "react";
import React from "react";

import "./componentesStyle.css";

function TeamCard(infos){
    const [modal, setModal] = useState(false)
    const {name, description, members, contact} = infos.infos;
    
    function showMembers(){
        
    }
    return(
        <>
            <div className="grid">
                <h1>{name}</h1>
                <p>{description}</p>
                <button onClick={showMembers}>Ver membros</button>
                <div>
                 {members.map((pessoa) => (
                    <div className="member" key={pessoa.id}>{pessoa}</div>
                ))}
                </div>
                
            </div>
        </>
    )
}

export default TeamCard