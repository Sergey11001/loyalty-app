import NftItem from "./NftItem";
import Sort from "./Sort";
import Search from "./Search";

import first from "../assets/nft-list/1.png";

const nftListItems = [
    {urlImg:first,title:"Name Nft",price:100},
    {urlImg:first,title:"Name Nft legendary",price:100},
    {urlImg:first,title:"Name Nft Create",price:350},
    {urlImg:first,title:"Name Nft",price:800},
    {urlImg:first,title:"Name Nft rare",price:100},
    {urlImg:first,title:"Name Nft common",price:500},
]


const NftList = () => {
    return (
        <div className="nft--list">
            <div className="nft--list__body">
                <div className="search--block">
                    <Sort />
                    <Search/>
                </div>
                <ul className="nft--list__list">
                    {
                        nftListItems.map((item,i)=>(
                            <li key={i} className="nft--list__item">
                                <NftItem {...item} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NftList