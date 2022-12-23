import { useDispatch } from "react-redux"
import { buyNft } from "../store/reducer";


const NftItem = ({uri, price, name, id}) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="nft--list__item--body">
                <div className="nft--list__item--img">
                    <img src={uri} alt="image" className="nft--list__item--image" />
                </div>
                <div className="nft--list__item--information">
                    <div className="list__item--price">
                        {price} sky
                    </div>
                    <div className="list__item--title">
                        {name}
                    </div>
                    <button href="#" className="list__item--btn" onClick={() => dispatch(buyNft({ id, price }))}>Buy</button>
                </div>
            </div>
        </>
    )
}
export default NftItem