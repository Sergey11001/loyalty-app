import search from "../assets/search.svg";


const Search = () => {
    return (
        <div className="search--block__search">
            <div className="search--block__input">
                <input type="text" className="search--input" placeholder="Search NFT"/>
                <img src={search} alt="search" className="search--img"/>
            </div>
        </div>
    )
}
export default Search