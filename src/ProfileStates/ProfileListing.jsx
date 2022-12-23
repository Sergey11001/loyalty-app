import ScrollingListNft from "../components/ScrollingListNft";
import Input from "../UI/Input";
import { useSelector } from "react-redux";

const ProfileListing = () => {
    const { balance, selfNfts } = useSelector((state) => state.web3);
    return (
        <>
            <div className="profile--collection">
                <div className="profile--collection__content">
                    <div className="profile--collection__top">
                        <div className="profile--collection__top--title">
                            Balance
                        </div>
                        <div className="profile--collection__top--amount">
                            {balance} sky
                        </div>
                    </div>
                    <ScrollingListNft twoRows={true} nftListItem={selfNfts}/>
                    <form action="" className="sell--form">
                        <div className="sell--form__inputs">
                            <Input type={"text"} label={"Enter price"} style={{padding:"17px 21px 24px"}}/>
                            <Input type={"text"} label={"Enter royalty"} style={{padding:"17px 21px 24px"}}/>
                        </div>
                        <div className="sell--form__submit">
                            <button className="sell--form__submit--btn">
                                Sell
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="profile--collection">
                <div className="profile--collection__content">
                    <div className="profile--collection__content--title">
                        Placed on marketplace
                    </div>
                    <ScrollingListNft delisting={true} twoRows={true} nftListItem={selfNfts} />
                </div>
            </div>
        </>
    )
}
export default ProfileListing