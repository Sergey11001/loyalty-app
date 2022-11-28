import figure from "../assets/connect-wallet/figure.png";
import adminBg from "../assets/connect-wallet/admin_bg.png"

const TopPanel = ({admin}) => {
    return (
        <div className="connect--wallet">
            <div className="main--container">
                <div className="connect--wallet__body connect--wallet__body_active">
                    <div className="body__bg">
                        <img src={admin ? adminBg: figure} className="body__bg--img" alt=""/>
                    </div>

                    <div className="connect--wallet__content">
                        <div className="connect--wallet__title">
                            Loyalty Program
                        </div>

                        <a href="#" className="connect--wallet__btn">
                            Connect wallet
                        </a>

                        {/*<div className="connect--wallet__connected">*/}
                        {/*    0xFDec540eEd390cx..*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopPanel