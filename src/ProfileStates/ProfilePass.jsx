import profileColor from "../assets/profile/profile_color.png";


const ProfilePass = () => {
    return (
        <>
            <div className="profile__img-wrapper">
                <img src={profileColor} alt="" className="profile__img"/>
            </div>
            <div className="person__inf">
                <div className="person__inf--pass">
                    <div className="pass--information">
                        <div className="pass--information__column--first">
                            <div className="pass--information__data">
                                <div className="data--title">
                                    Name
                                </div>
                                <div className="data--content">
                                    Big Boss Bos..
                                </div>
                            </div>
                            <div className="pass--information__data">
                                <div className="data--title">
                                    ID
                                </div>
                                <div className="data--content data--content_small">
                                    #8888
                                </div>
                            </div>
                        </div>
                        <div className="pass--information__column--second">
                            <div className="pass--information__data">
                                <div className="data--title">
                                    Balance
                                </div>
                                <div className="data--content data--content_pink">
                                    1856 <br/> gem
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePass