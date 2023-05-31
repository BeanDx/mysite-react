import { NavLink } from "react-router-dom";

import "./style.css";

import logo from "./../../img/header/logo-light.webp";

const Header = () => {
    return (
        <header className="header">
            <div className="header header__container">
                <button className="header__burger-btn" id="burger">
                    <span></span><span></span><span></span>
                </button>

                <NavLink to="/" className="logo">
                    <img src={logo} alt="logo" />
                    <span className="header__logo-text">BeanD</span>
                </NavLink>
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <NavLink to="/stack">Stack</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/works">Works</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/workspace">Workspace</NavLink>
                        </li>
                    </ul>
                </nav>
                <button type="button" className="themetoggle">
                    <span className="material-icons">wb_sunny</span>
                </button>
            </div>
        </header>
    );
};

export default Header;