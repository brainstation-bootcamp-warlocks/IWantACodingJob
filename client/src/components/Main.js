import React from "react";
import "./Main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="main-container">
                <div className="main-container--todo">
                    <div className="main-todo">TO DO</div>
                </div>
                <div className="main-container--done">DONE</div>
            </div>
        </main>
    )
}

export default Main;