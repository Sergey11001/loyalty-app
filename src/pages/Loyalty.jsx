import NftList from "../components/NftList";
import TopPanel from "../components/TopPanel";
import ProfileBlock from "../components/ProfileBlock";


const Loyalty = () =>{
    return (
        <>
            <div className="loyalty--page">
                <TopPanel />
                <div className="content--container main--container">
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