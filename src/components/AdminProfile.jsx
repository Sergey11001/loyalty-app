import profileAdmin from "../assets/profile/admin.png";
import profileAdminBg from "../assets/profile/admin_profile_bg.png"

const AdminProfile = () => {
    return (
        <>
            <div className="admin--profile">
                <div className="admin--profile__content">
                    <img src={profileAdmin} alt="" className="admin--profile__img"/>
                    <div className="admin--profile__btn">
                        Skyrocket NFT ID
                    </div>
                    <div className="admin--profile__bg">
                        <img src={profileAdminBg} alt="" className="admin--profile__bg--img"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminProfile