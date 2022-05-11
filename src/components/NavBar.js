import React from "react";

const source="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png";

function NavBar(){
    return(
        <nav className="header">
            <img src={source}/>
        </nav>
    )
}

export default NavBar;