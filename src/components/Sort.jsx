
import arrow from "../assets/arrow_down.svg"
import {useEffect, useRef, useState} from "react";

const sortTypes=["Price Low to High","Price High to Low"]

const Sort = ({sortActiveIndex, setSortActiveIndex}) => {
    const [activeSelector,setActiveSelector] = useState(false)
    const refSelector = useRef(null)


    const chooseActiveSort = (i) => {
        setSortActiveIndex(i)
        setActiveSelector(false)
    }

    useEffect(() => {
        const handleClickOutSelector = (e) => {
            if(refSelector.current && !e.path?.includes(refSelector.current)){
                setActiveSelector(false)
            }
        }
        window.addEventListener("click", (e) => handleClickOutSelector(e))
        return () => window.removeEventListener("click", (e) => handleClickOutSelector(e))
    },[])

    return (
        <div className="search--block__sort">
            <div className="sort--selector" ref={refSelector}>
                <div className="sort--selector__header" onClick={() => setActiveSelector(!activeSelector)}>
                    <div>{sortTypes[sortActiveIndex]}</div>
                    <img src={arrow} alt="open" className={activeSelector ? "arrow_opened" : ''}/>
                </div>
                <div className={activeSelector ? "sort--selector__body sort--selector__body_active" : "sort--selector__body"}>
                    <div className="sort--selector__body--options">
                        {
                           sortTypes.map((item,i) => (
                               <div key={i} className={sortActiveIndex===i ? "search--block__sort--type active--sort" : "search--block__sort--type"} onClick={() => chooseActiveSort(i)}>
                                   {item}
                               </div>
                           ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sort