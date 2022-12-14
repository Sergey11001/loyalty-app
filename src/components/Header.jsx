import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import Footer from "./Footer";
import logo from "../assets/header/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet, disconnectWallet } from "../store/reducer";

const Header = () => {
    const [activeBurger,setActiveBurger] = useState(false)
    const dispatch = useDispatch()
    const { signerAddr } = useSelector((state) => state.web3)

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
                <div className={activeBurger ? "header--menu__wrapper header--menu__wrapper_active" : "header--menu__wrapper"}>
                    <nav className="header--menu">
                        <ul className="header--menu__list">
                            <li className="header--menu__item">
                            {
                                !signerAddr ? (
                                    <button href="#" className="header__btn mobile" onClick={() => dispatch(connectWallet())}>
                                        Connect wallet
                                    </button>
                                ) : (
                                    <div className="header__connected mobile" onClick={() => dispatch(disconnectWallet())}>
                                        {signerAddr.slice(0, 16)}..
                                    </div>
                                )
                            }
                            </li>
                            <li className="header--menu__item">
                                <NavLink to="/admin" className="header--menu__link" onClick={() => setActiveBurger(false)}>
                                    Admin Panel
                                </NavLink>
                            </li>
                            <li className="header--menu__item">
                                <NavLink to="/" className="header--menu__link" onClick={() => setActiveBurger(false)}>
                                    Loyalty Program
                                </NavLink>
                            </li>
                        </ul>
                        <Footer menuDropDown={true} />
                    </nav>
                </div>
                {
                    !signerAddr ? (
                        <button href="#" className="header__btn desctop" onClick={() => dispatch(connectWallet())}>
                            Connect wallet
                        </button>
                    ) : (
                        <div className="header__connected desctop" onClick={() => dispatch(disconnectWallet())}>
                            {signerAddr.slice(0, 16)}..
                        </div>
                    )
                }
            </div>
        </header>
    )
}
export default Header