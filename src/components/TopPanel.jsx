import figure from "../assets/connect-wallet/figure.png";
import adminBg from "../assets/connect-wallet/admin_bg.png"
import cn from 'classnames';
import { useSelector } from 'react-redux';

const TopPanel = ({admin}) => {
    const { signerAddr } = useSelector((state) => state.web3)

    return (
        <div className="connect--wallet">
            <div className="main--container">
                <div className={cn("connect--wallet__body", {
                    "connect--wallet__body_active": !!signerAddr 
                })} >
                    <div className="body__bg">
                        {signerAddr && <img src={admin ? adminBg: figure} className="body__bg--img" alt=""/>}
                    </div>

                    <div className="connect--wallet__content">
                        <div className="connect--wallet__title">
                            Loyalty Program
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopPanel