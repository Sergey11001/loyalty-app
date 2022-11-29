
import arrow from "../assets/arrow_down.svg"
import {useState} from "react";

const Sort = () => {
    const [activeSelector,setActiveSelector]=useState(false)

    return (
        <div className="search--block__sort">
            <div className="sort--selector">
                <div className="sort--selector__header" onClick={() => setActiveSelector(!activeSelector)}>
                    <div>Price High to Low</div>
                    <img src={arrow} alt="open" className={activeSelector ? "arrow_opened" : ''}/>
                </div>
                <div className={activeSelector ? "sort--selector__body sort--selector__body_active" : "sort--selector__body"}>
                    <div className="sort--selector__body--options">
                        <div className="search--block__sort--low active--sort">
                            Price High to Low
                        </div>
                        <div className="search--block__sort--high">
                            Price Low to High
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sort