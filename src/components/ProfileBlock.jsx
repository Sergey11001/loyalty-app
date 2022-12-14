import {useEffect, useState} from "react";
import ProfileMenu from "./ProfileMenu";
import { changeStep } from "../store/actions"
import ProfileNotMenuChosen from "../ProfileStates/ProfileNotMenuChosen";
import ProfilePass from "../ProfileStates/ProfilePass";
import ProfileNftCollection from "../ProfileStates/ProfileNftCollection";
import Achievements from "./Achievements";
import ProfileListing from "../ProfileStates/ProfileListing";
import { useDispatch, useSelector } from "react-redux";


const ProfileBlock = () => {
    const dispatch = useDispatch()
    const { selfID } = useSelector((state) => state.web3)
    const [activeMenuIndex, setActiveMenuIndex] = useState(-1)

    useEffect(() => {
        dispatch(changeStep(activeMenuIndex))
    }, [activeMenuIndex, dispatch])

    useEffect(() => {
        if (!!selfID) {
            setActiveMenuIndex(0)
        } else {
            setActiveMenuIndex(-1)
        }
    }, [selfID])

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
                        activeMenuIndex===2 && <ProfileListing />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileBlock