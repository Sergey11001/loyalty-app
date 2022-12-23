import {useEffect, useState} from "react";

import NftItem from "./NftItem";
import Sort from "./Sort";
import Search from "./Search";
import { useSelector } from "react-redux";


const NftList = () => {
    const { allNfts } = useSelector((state) => state.web3);

    const [mainSearch, setMainSearch]=useState("")
    const [sortActiveIndex, setSortActiveIndex] = useState(0);
    const [nftListItems, setItems] = useState(allNfts);

    useEffect(() => {
        if (sortActiveIndex) {
            setItems(nftListItems.sort((a, b) => Number(a.price) - Number(b.price)))
        } else {
            setItems(nftListItems.sort((a, b) => Number(b.price) - Number(a.price)))
        }
    }, [sortActiveIndex, setItems])

    useEffect(() => {
        console.log(allNfts);
        setItems(allNfts)
    }, [allNfts, setItems])

    return (
        <div className="nft--list">
            <div className="nft--list__body">
                <div className="search--block">
                    <Sort sortActiveIndex={sortActiveIndex} setSortActiveIndex={setSortActiveIndex}/>
                    <Search setMainSearch={setMainSearch}/>
                </div>
                <ul className="nft--list__list">
                    {
                        nftListItems.filter(item => item.name.toLowerCase().includes(mainSearch.toLowerCase())).map((item,i) => (
                            <li key={i} className="nft--list__item">
                                <NftItem {...item} id={item.id} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NftList