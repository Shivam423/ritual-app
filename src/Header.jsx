import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <NavLink to="/" className="link"><li>Menu</li></NavLink>
                    <NavLink to="/" className="link"><li className="rits">Ritual</li></NavLink>
                    <NavLink to="/" className="link"><div className="lock-icon"><li>Who We Are</li>
                    <i class="fas fa-lock"></i></div></NavLink>
                </ul>
            </header>
        </>
    )
}

export default Header
