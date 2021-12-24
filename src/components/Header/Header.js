import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <ul className="menu">
                <Link to="/"><li className="menu-itme"> Home</li></Link>
                <Link to="/product"><li className="menu-itme">Product</li></Link>
                <Link to="/contact"><li className="menu-itme">Contact</li></Link>
            </ul>
        </div>
    )
}

export default Header
