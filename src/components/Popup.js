import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import ParticlesBg from "particles-bg";

function Popup(props) {
    const refreshPage = ()=>{
        window.location.reload();
     }
    return props.trigger ?  (
        <>
        <div className="popup">
            <div className="popup-inner">
                <div className="infor">
                    <h1>{props.notification}</h1>
                    <h1> FINAL </h1>
                    <h3>Player {props.winner} win</h3> 
                    <h3>Scores {props.scores}</h3>
                    <h3> You're best player</h3>
                    <button className="restart-btn" style={{marginBottom:"5px"}} onClick={refreshPage}><span>Play again</span></button>
                    <Link style={{flex:1,justifyContent: "center",alignItems: "center"}} to={"/"}>
                    <button className="restart-btn">Quit</button>
                    </Link>
                    {props.children}
                    <ParticlesBg  type="" bg={true}/>

                </div>
            </div>
        </div>

        </>
    ) : ""
}

export default Popup