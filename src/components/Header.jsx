import logo from "../assets/header/logo.png";

const Header = () => {
    return(
        <header className="header">
            <div className="header--container main--container">
                <div className="header--logo">
                    <img src={logo} alt="logo" className="header--logo__img"/>
                </div>
                <div className="header--name">
                    Loyalty Program
                </div>
                <div className="header--menu__burger">
                    <span></span>
                </div>
                <nav className="header--menu">
                    <ul className="header--menu__list">
                        <li className="header--menu__item">
                            <a href="#" className="header--menu__link">
                                Admin Panel
                            </a>
                        </li>
                        <li className="header--menu__item header--menu__item_active">
                            <a href="#" className="header--menu__link">
                                Loyalty Program
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header