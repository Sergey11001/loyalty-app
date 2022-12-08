import figure from "../assets/connect-wallet/figure.png";
import adminBg from "../assets/connect-wallet/admin_bg.png"
import { useSelector, useDispatch } from 'react-redux';
import { connectWallet, disconnectWallet } from "../store/reducer";

const TopPanel = ({admin}) => {
    const dispatch = useDispatch()
    const { signerAddr } = useSelector((state) => state.web3)

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
                        
                        {
                            !signerAddr ? (
                                <button href="#" className="connect--wallet__btn" onClick={() => dispatch(connectWallet())}>
                                    Connect wallet
                                </button>
                            ) : (
                                <div className="connect--wallet__connected" onClick={() => dispatch(disconnectWallet())}>
                                    {signerAddr.slice(0, 16)}..
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopPanel