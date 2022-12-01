import ScrollingListNft from "../components/ScrollingListNft";
import picture from "../assets/collection_nft/1.png";
import Input from "../UI/Input";

const listNft=[
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture},
    {name:"NFT Name Legend", imgUrl:picture}
]
const ProfileListing = () => {
    return (
        <>
            <div className="profile--collection">
                <div className="profile--collection__content">
                    <div className="profile--collection__top">
                        <div className="profile--collection__top--title">
                            Balance
                        </div>
                        <div className="profile--collection__top--amount">
                            1856 gem
                        </div>
                    </div>
                    <ScrollingListNft twoRows={true} nftListItem={listNft}/>
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
                    <ScrollingListNft delisting={true} twoRows={true} nftListItem={listNft}></ScrollingListNft>
                </div>
            </div>
        </>
    )
}
export default ProfileListing