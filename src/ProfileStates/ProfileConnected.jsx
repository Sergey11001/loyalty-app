import { useDispatch, useSelector } from "react-redux"
import { mintMyPass } from "../store/reducer";


const ProfileConnected = () => {
    const dispatch = useDispatch();
    const { provider, selfID } = useSelector((state) => state.web3);

    return (
        <div className="person__inf--connected">
            {
                selfID ? (
                    <></>
                ) : (
                    <button className="mint--btn" onClick={() => dispatch(mintMyPass())} disabled={!provider}>Mint NFT Pass ID</button>
                )
            }
        </div>
    )
}
export default ProfileConnected