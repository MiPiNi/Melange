import React from "react";
import "../navbar.css"

function Navbar(){
    return(
      <nav className="nav">
            <button className="back"></button>
            <button className="reset"></button>

        <label>
        <input type="text" className="nick" placeholder="name" maxLength={8}/>
        <button className="add_player"></button>
        </label>
        <div className="player_bar"></div>
      </nav>
    )
}
export default Navbar;