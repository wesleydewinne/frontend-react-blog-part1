import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? "active-menu-link" : 'default-menu-link' }
                        to="/">Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? "active-menu-link" : 'default-menu-link' }
                        to="/PostDetail">Alle posts
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? "active-menu-link" : 'default-menu-link' }
                        to="/NewPost">Nieuwe post maken
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;