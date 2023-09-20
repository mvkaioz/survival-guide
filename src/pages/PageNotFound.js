import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

export default function PageNotFound() {
    return (
        <div>
            <div className="PNF-page">
            <div className="background">
                <div className="PNF-title">
                    <h2>Uh oh. We think you got lost while navigating, let's help you get back on track to succeed!</h2>
                    <button className="button-PNF" onClick={() => navigate("menu")}>
                     Bring me back to the main menu!
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}