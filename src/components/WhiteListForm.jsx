import Input from "../UI/Input";


const WhiteListForm = () => {
    return (
        <>
            <div className="wl--form">
                <div className="wl--form__body">
                    <div className="wl--form__title">
                        Marketplace loyalty program
                    </div>
                        {/*<div className="wl--form__buttons">*/}
                        {/*    <div className="wl--form__btn">*/}
                        {/*        Enable*/}
                        {/*    </div>*/}
                        {/*    <div className="wl--form__btn">*/}
                        {/*        Disable*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    <form action="" className="wl--form__content">
                        <div className="wl--form__inputs">
                            <div className="inputs--block__title">
                                White list
                            </div>
                            <Input label="Add wallet" type="text"/>
                            <Input label="Remove wallet" type="text"/>
                        </div>
                        <div className="wl--form__inputs">
                            <div className="inputs--block__title">
                                Add NFT
                            </div>
                            <Input label="Smart-contract NFT" type="text"/>
                            <Input label="Price NFT" type="text"/>
                        </div>
                        <div className="wl--form__inputs">
                            <div className="inputs--block__title">
                                Remove NFT
                            </div>
                            <Input label="Smart-contract NFT" type="text"/>
                        </div>
                        <div className="wl--form__inputs">
                            <div className="inputs--block__title">
                                Change Price NFT
                            </div>
                            <Input label="Smart-contract NFT" type="text"/>
                            <Input label="New price NFT" type="text"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default WhiteListForm