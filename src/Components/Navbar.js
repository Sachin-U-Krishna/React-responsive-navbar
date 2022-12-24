import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import './navbar.css'
import { Icon } from '@iconify/react';

export default function Navbar() {
    const [icon, setIcon] = useState("icon-park:hamburger-button") 

    let navLinkActive = {
        borderBottom: "3px solid #2d4a8a",
        color: "#2d4a8a"
    };

    function menuButton() {
        if (!document.getElementById('menu').checked) {
            document.getElementById('menu').checked = true;
            document.getElementById('navbar').style.animation = "menuDown 250ms linear";
            console.log()
            window.setTimeout(() => {
                document.getElementById('menuList').style.display = "block";
                document.getElementById('navbar').style.animation = "none";
                setIcon("mdi:close");
            }, 245);
            return;
        }
        document.getElementById('menu').checked = false;
        window.setTimeout(() => {
            document.getElementById('menuList').style.display = "none";
            document.getElementById('menuList').style.animation = "none";
            setIcon("icon-park:hamburger-button");
        }, 75);
        document.getElementById('menuList').style.animation = "menuUp 250ms ease-out";
    }

    window.onresize = () => {
        if (window.innerWidth > 768) {
            if (document.getElementById('menuList').style.display !== "inline-flex") {
                document.getElementById('menuList').style.display = "inline-flex";
                document.getElementById('menu').checked = false;
                setIcon("icon-park:hamburger-button");
                document.getElementById('menuList').style.animation = "none";
            }
            return;
        }
        if (!document.getElementById('menu').checked) {
            document.getElementById('menuList').style.display = "none";
        }
    }

    return (
        <>
            <div className="nav-header">
                <nav id="navbar">
                    <span id="nav-title"><NavLink className="nav-head" to="/">Navbar</NavLink></span>
                    <ul id="menuList">
                        <NavLink to="/" style={({ isActive }) => isActive ? navLinkActive : undefined}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="about" style={({ isActive }) => isActive ? navLinkActive : undefined}>
                            <li>About</li>
                        </NavLink>
                        <NavLink to="/">
                            <li>Sample</li>
                        </NavLink>
                        <NavLink to="/">
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                    <span className="hamburger">
                        <input type="checkbox" id="menu" />
                        <Icon icon={icon} width="46" onClick={()=>menuButton()}/>
                    </span>
                </nav>
            </div>
        </>
    )
}
