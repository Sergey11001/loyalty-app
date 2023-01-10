import { useSelector } from "react-redux";
import profileColor from "../assets/profile/profile_color.png";


const ProfilePass = () => {
    const { selfID, balance } = useSelector((state) => state.web3);

    return (
        <>
            <div className="profile__img-wrapper">
                <img src={profileColor} alt="" className="profile__img colour"/>
            </div>
            <div className="person__inf">
                <div className="person__inf--pass">
                    <div className="pass--information">
                        <div className="pass--information__column--first">
                            <div className="pass--information__data">
                                <div className="data--title">
                                    Name
                                </div>
                                <div className="data--content">
                                    Admin..
                                </div>
                            </div>
                            <div className="pass--information__data">
                                <div className="data--title">
                                    ID
                                </div>
                                <div className="data--content data--content_small">
                                    #{String(selfID).padStart(4, '0')}
                                </div>
                            </div>
                        </div>
                        <div className="pass--information__column--second">
                            <div className="pass--information__data">
                                <div className="data--title">
                                    Balance
                                </div>
                                <div className="data--content data--content_pink">
                                    {balance} <br/> sky
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePass