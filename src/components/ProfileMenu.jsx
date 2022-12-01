
const profileMenu = [" My Pass ID", `My NFT`, "Listing NFT"]

const ProfileMenu = ({activeMenuIndex, setActiveMenuIndex}) => {

    return (
        <div className="profile--body__menu">
            {
                profileMenu.map((item,i) => (
                    <div key={i} className={activeMenuIndex===i ? "profile--body__menu--item profile--body__menu--item_active" : "profile--body__menu--item"} onClick={() => setActiveMenuIndex(i)}>
                        {item}
                    </div>
                ))
            }
        </div>
    )
}
export default ProfileMenu