import search from "../assets/search.svg";
import {useEffect, useState} from "react";


const Search = ({setMainSearch}) => {
    const [searchTerm,setSearchTerm]=useState("")
    const inputChange = (e) =>{
        setSearchTerm(e.target.value)
    }
    useEffect(()=>{
        const timer=setTimeout(() => setMainSearch(searchTerm),300)
        return () => clearTimeout(timer)
    },[searchTerm])

    return (
        <div className="search--block__search">
            <div className="search--block__input">
                <label htmlFor="search">
                    <div className="search--img">
                        <img src={search} alt="search"/>
                    </div>
                </label>
                <input id="search" value={searchTerm} onChange={(e) => inputChange(e)} type="text" className="search--input" placeholder="Search NFT"/>
            </div>
        </div>
    )
}
export default Search