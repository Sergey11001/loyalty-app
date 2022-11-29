

const NftItem = ({urlImg, price, title}) => {

    return (
        <>
            <div className="nft--list__item--body">
                <div className="nft--list__item--img">
                    <img src={urlImg} alt="" className="nft--list__item--image"/>
                </div>
                <div className="nft--list__item--information">
                    <div className="list__item--price">
                        {price} gem
                    </div>
                    <div className="list__item--title">
                        {title}
                    </div>
                    <a href="#" className="list__item--btn">Buy</a>
                </div>
            </div>
        </>
    )
}
export default NftItem