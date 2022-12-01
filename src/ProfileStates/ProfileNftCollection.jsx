
import ScrollingListNft from "../components/ScrollingListNft";
import picture from "../assets/collection_nft/1.png"

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

    return(
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
                    <ScrollingListNft nftListItem={listNft}/>
                </div>
            </div>
        </>
        
    )
}

export default ProfileNftCollection