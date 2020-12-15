import React from "react"

import logo from "../assets/logo.svg"

const Logo = (props) => {
    return (
        <div className={"Logo"} style={{ height: props.height }}>
            <img src={logo} alt="" />
        </div>
    )
}

export default Logo