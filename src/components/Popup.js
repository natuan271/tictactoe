import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import ParticlesBg from "particles-bg";

function Popup(props) {

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
                    <Link style={{flex:1,justifyContent: "center",alignItems: "center"}} to={"/"}>
                    <button className="restart-btn">Restart</button>
                    </Link>
                    <Link to={"/Game?player1=" + props.player1 + "&player2=" + props.player2 + "&BO=" + props.BestOfRound}>
                        <button className="restart-btn"  ><span>Login</span></button>
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