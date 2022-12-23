
import ScrollingListNft from "../components/ScrollingListNft";
import picture from "../assets/collection_nft/1.png"
import { useSelector } from "react-redux";

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

const ProfileNftCollection = () => {
    const { balance } = useSelector((state) => state.web3);

    return(
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
                    <ScrollingListNft nftListItem={listNft}/>
                </div>
            </div>
        </>
        
    )
}

export default ProfileNftCollection