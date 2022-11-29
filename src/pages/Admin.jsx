import TopPanel from "../components/TopPanel";
import AdminProfile from "../components/AdminProfile";
import WhiteListForm from "../components/WhiteListForm";


const Admin = () => {
    return(
        <>
            <div className="admin--page">
                <TopPanel admin />
                <div className="content--container main--container">
                    <div className="main--block">
                        <AdminProfile />
                        <WhiteListForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin