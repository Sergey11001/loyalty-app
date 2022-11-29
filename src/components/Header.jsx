import logo from "../assets/header/logo.png";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [activeBurger,setActiveBurger] = useState(false)

    useEffect(()=>{
        activeBurger ? document.body.classList.add('no-scroll') :document.body.classList.remove("no-scroll")
    },[activeBurger])

    return(
        <header className="header">
            <div className="header--container main--container">
                <div className="header--logo">
                    <img src={logo} alt="logo" className="header--logo__img"/>
                </div>
                <div className="header--name">
                    Loyalty Program
                </div>
                <div className={activeBurger ? "header--menu__burger header--menu__burger_active" : "header--menu__burger"} onClick={() => setActiveBurger(!activeBurger)}>
                    <span></span>
                </div>
                <nav className={activeBurger ? "header--menu header--menu_active" : "header--menu" }>
                    <ul className="header--menu__list">
                        <li className="header--menu__item">
                            <NavLink to="/admin" className="header--menu__link">
                                Admin Panel
                            </NavLink>
                        </li>
                        <li className="header--menu__item">
                            <NavLink to="/" className="header--menu__link">
                                Loyalty Program
                            </NavLink>
                        </li>
                    </ul>
                    <div className="footer--dropdown">
                        <div className="main--container">
                            <div className="footer--body">
                                <div className="footer--body__contact">
                                    Contact HR
                                    <a href="#" className="footer--body__contact--link">hr@skyrocket.fund</a>
                                </div>
                                <div className="footer--body__copyright">
                                    Copyright © 2022 Loyalty Program
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header