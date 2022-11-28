import profileColor from "../assets/profile/profile_color.png";


const Popup = () => {
    return (
        <div className="popup--congrat">
            <div className="popup--congrat__body">
                <div className="close">

                </div>
                <div className="popup--congrat__title">
                    Congratulations!
                </div>
                <div className="popup--congrat__subtitle">
                    Your NFT Pass ID <span>#8888</span>
                </div>
                <div className="popup--congrat__image--wrapper">
                    <img src={profileColor} alt="" className="popup--congrat__img"/>
                </div>
                <a href="#" className="popup--congrat__btn">
                    Ok
                </a>
            </div>
        </div>
    )
}
export default Popup