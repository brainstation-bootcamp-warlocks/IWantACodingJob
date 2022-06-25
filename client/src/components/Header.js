import React from "react";
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-container--title">To Do List</div>
                <div className="header-container--search">
                    <div className="header-container--search-add">Add your to do list!</div>
                    <input type ="text" className="header__search" placeholder="Search"></input>
                    <button className="header__button">CREATE</button>
            </div>
            </div>
        </header>
    )
}

export default Header;