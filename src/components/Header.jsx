import React from "react";
import { redirect } from "react-router-dom";

const Header = ({name = "", email = ""}) => {
    return (
        <header>
            <h1>Hello {name},</h1>
            <p>{email}</p>
        </header>
    )
}

export default Header