import NftList from "../components/NftList";
import ProfileMenu from "../components/ProfileMenu";
import ProfileContent from "../components/ProfileContent";
import ProfileNotMenuChosen from "../ProfileStates/ProfileNotMenuChosen";
import TopPanel from "../components/TopPanel";


const Loyalty = () =>{
    return (
        <>
            <div className="loyalty--page">
                <TopPanel />
                <div className="nft--container main--container">
                    <div className="main--block">
                        <div className="profile">
                            <div className="profile--body">
                                <ProfileMenu />
                                <div className="profile--body__information">
                                    <ProfileNotMenuChosen />
                                </div>
                            </div>
                        </div>
                        <NftList />
                    </div>
                </div>
            </div>

        </>

    )
}
export default Loyalty