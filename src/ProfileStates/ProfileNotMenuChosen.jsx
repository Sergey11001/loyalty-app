import profile from "../assets/profile/profile.png";
import ProfileUnconnected from "./ProfileUnconnected";
import ProfileConnected from "./ProfileConnected";
import { useSelector } from "react-redux";

const ProfileNotMenuChosen = () => {
    const { provider } = useSelector((state) => state.web3);

    return (
        <>
            <div className="profile__img-wrapper">
                <img src={profile} alt="" className="profile__img"/>
            </div>
            <div className="person__inf">
                {
                    !!provider ? (
                        <ProfileConnected />
                    ) : (
                        <ProfileUnconnected />
                    )
                }
            </div>
        </>
    )
}
export default ProfileNotMenuChosen