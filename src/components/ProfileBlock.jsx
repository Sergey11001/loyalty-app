import ProfileMenu from "./ProfileMenu";
import ProfileNotMenuChosen from "../ProfileStates/ProfileNotMenuChosen";
import {useState} from "react";
import ProfilePass from "../ProfileStates/ProfilePass";
import ProfileNftCollection from "../ProfileStates/ProfileNftCollection";
import Achievements from "./Achievements";
import ProfileListining from "../ProfileStates/ProfileListining";


const ProfileBlock = () => {
    const [activeMenuIndex,setActiveMenuIndex] = useState(-1)

    return (
        <div className="profile">
            <div className="profile--body">
                <ProfileMenu activeMenuIndex={activeMenuIndex} setActiveMenuIndex={setActiveMenuIndex}/>
                <div className="profile--body__information">
                    {
                        activeMenuIndex===-1 && <ProfileNotMenuChosen />
                    }
                    {
                        activeMenuIndex===0 &&
                        <>
                            <ProfilePass />
                            <Achievements />
                        </>
                    }
                    {
                        activeMenuIndex===1 &&
                        <>
                            <ProfileNftCollection />
                            <Achievements />
                        </>
                    }
                    {
                        activeMenuIndex===2 && <ProfileListining />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileBlock