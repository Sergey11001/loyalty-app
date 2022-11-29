import ProfileMenu from "./ProfileMenu";
import ProfileNotMenuChosen from "../ProfileStates/ProfileNotMenuChosen";
import {useState} from "react";


const ProfileBlock = () => {
    const [activeMenuIndex,setActiveMenuIndex] = useState(0)

    return (
        <div className="profile">
            <div className="profile--body">
                <ProfileMenu activeMenuIndex={activeMenuIndex} setActiveMenuIndex={setActiveMenuIndex}/>
                <div className="profile--body__information">
                    <ProfileNotMenuChosen />
                </div>
            </div>
        </div>
    )
}

export default ProfileBlock