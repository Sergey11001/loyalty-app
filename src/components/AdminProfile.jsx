import profileAdmin from "../assets/profile/admin.png";

const AdminProfile = () => {
    return (
        <>
            <div className="admin--profile">
                <div className="admin--profile__content">
                    <img src={profileAdmin} alt="" className="admin--profile__img"/>
                    <div className="admin--profile__btn">
                        Big Boss
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminProfile