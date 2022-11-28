import profile from "../assets/profile/profile.png";
import ProfileUnconnected from "./ProfileUnconnected";
import ProfileConnected from "./ProfileConnected";


const ProfileNotMenuChosen = () => {
    return (
        <>
            <div className="profile__img-wrapper">
                <img src={profile} alt="" className="profile__img"/>
            </div>
            <div className="person__inf">
                <ProfileConnected />
            </div>

        </>
    )
}
export default ProfileNotMenuChosen