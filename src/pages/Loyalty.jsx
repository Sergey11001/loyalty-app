import NftList from "../components/NftList";
import ProfileMenu from "../components/ProfileMenu";
import ProfileContent from "../components/ProfileContent";
import ProfileNotMenuChosen from "../ProfileStates/ProfileNotMenuChosen";
import TopPanel from "../components/TopPanel";
import ProfileBlock from "../components/ProfileBlock";


const Loyalty = () =>{
    return (
        <>
            <div className="loyalty--page">
                <TopPanel />
                <div className="nft--container main--container">
                    <div className="main--block">
                        <ProfileBlock />
                        <NftList />
                    </div>
                </div>
            </div>

        </>

    )
}
export default Loyalty