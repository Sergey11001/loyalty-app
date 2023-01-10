import { useSelector } from "react-redux"

const profileMenu = [" My Pass ID", `My NFT`, "Listing NFT"]

const ProfileMenu = ({activeMenuIndex, setActiveMenuIndex}) => {
    const { provider, selfID } = useSelector((state) => state.web3)
    return (
        <div className="profile--body__menu">
            {
                profileMenu.map((item,i) => (
                    <button disabled={!provider || !selfID || item === "Listing NFT"} key={i} className={activeMenuIndex===i ? "profile--body__menu--item profile--body__menu--item_active" : "profile--body__menu--item"} onClick={() => setActiveMenuIndex(i)}>
                        {item}
                    </button>
                ))
            }
        </div>
    )
}
export default ProfileMenu