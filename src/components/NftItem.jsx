

const NftItem = ({urlImg, price, title, id}) => {
    return (
        <>
            <div className="nft--list__item--body">
                <div className="nft--list__item--img">
                    <img src={urlImg} alt="image" className="nft--list__item--image" />
                </div>
                <div className="nft--list__item--information">
                    <div className="list__item--price">
                        {price} sky
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