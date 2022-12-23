import {useEffect, useState} from "react";

import NftItem from "./NftItem";
import Sort from "./Sort";
import Search from "./Search";

import first from "../assets/nft-list/1.png";

const nftListItems = [
    {urlImg:first,title:"Name Nft",price:100, id:1},
    {urlImg:first,title:"Name Nft legendary",price:100, id:2},
    {urlImg:first,title:"Name Nft Create",price:350, id:3},
    {urlImg:first,title:"Name Nft",price:800, id:4},
    {urlImg:first,title:"Name Nft rare",price:100, id:5},
    {urlImg:first,title:"Name Nft common",price:500, id:6},
]


const NftList = () => {
    const [mainSearch, setMainSearch]=useState("")
    const [sortActiveIndex, setSortActiveIndex] = useState(0);
    const [items, setItems] = useState(nftListItems);

    useEffect(() => {
        if (sortActiveIndex) {
            setItems(items.sort((a, b) => a.price - b.price))
        } else {
            setItems(items.sort((a, b) => b.price - a.price))
        }
    }, [sortActiveIndex, setItems])

    return (
        <div className="nft--list">
            <div className="nft--list__body">
                <div className="search--block">
                    <Sort sortActiveIndex={sortActiveIndex} setSortActiveIndex={setSortActiveIndex}/>
                    <Search setMainSearch={setMainSearch}/>
                </div>
                <ul className="nft--list__list">
                    {
                        nftListItems.filter(item => item.title.toLowerCase().includes(mainSearch.toLowerCase())).map((item,i) => (
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