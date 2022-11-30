import picture from "../assets/collection_nft/1.png"
import {useEffect, useRef, useState} from "react";
const ProfileNftCollection = () => {
    const [scrolledCount,setScrolledCount] = useState(0)
    const refPrev=useRef(null)
    const refNext=useRef(null)
    const refScrollingBody=useRef(null)
    const refScrollingItem=useRef(null)
    console.log(refScrollingItem.current && (refScrollingItem.current.offsetWidth+parseInt(window.getComputedStyle(refScrollingBody.current).gap))*(scrolledCount) + refScrollingItem.current.offsetWidth*2 + parseInt(window.getComputedStyle(refScrollingBody.current).gap))
    console.log(refScrollingBody.current && refScrollingBody.current.scrollWidth)
    const scrollingToPrev = () => {
        setScrolledCount(scrolledCount - 1)
    }

    const scrollingToNext = () => {
        setScrolledCount(scrolledCount + 1)
    }

    useEffect(() => {
        if(!scrolledCount){
            refScrollingBody.current.style.left = -refScrollingItem.current.offsetWidth * scrolledCount +"px"
        }
        else refScrollingBody.current.style.left = -(refScrollingItem.current.offsetWidth + parseInt(window.getComputedStyle(refScrollingBody.current).gap)) * scrolledCount  +"px"
    },[scrolledCount])


    useEffect(() => {
        refPrev && scrolledCount!==0 ? refPrev.current.classList.remove("disable") : refPrev.current.classList.add("disable")

        {(refScrollingItem.current.offsetWidth+parseInt(window.getComputedStyle(refScrollingBody.current).gap))*(scrolledCount) + refScrollingItem.current.offsetWidth*2 + parseInt(window.getComputedStyle(refScrollingBody.current).gap)===refScrollingBody.current.scrollWidth ? refNext.current.classList.add("disable") : refNext.current.classList.remove("disable")}
    },[scrolledCount])

    return(
        <>
            <div className="profile--collection">
                <div className="profile--collection__content">
                    <div className="profile--collection__top">
                        <div className="profile--collection__top--title">
                            Balance
                        </div>
                        <div className="profile--collection__top--amount">
                            1856 gem
                        </div>
                    </div>
                    <div className="collection__wrapper">
                        <div className="prev--btn" ref={refPrev} onClick={() => scrollingToPrev()}>
                            <svg className="arrow--scroll" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.54297 10.582L10.5502 19.5892M1.54297 10.582L10.5502 1.57481M1.54297 10.582L23.2883 10.582" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div className="collection--visible">
                            <div className="collection--body__scrolling" ref={refScrollingBody}>
                                <div className="collection--item" ref={refScrollingItem}>
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item" ref={refScrollingItem}>
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item" ref={refScrollingItem}>
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item" ref={refScrollingItem}>
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item" ref={refScrollingItem}>
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div><div className="collection--item">
                                <div className="collection--item__image">
                                    <img src={picture} alt="" className="collection--img"/>
                                </div>
                                <div className="collection--item__title">
                                    Name Nft Name Nft
                                </div>
                            </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>

                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                                <div className="collection--item">
                                    <div className="collection--item__image">
                                        <img src={picture} alt="" className="collection--img"/>
                                    </div>
                                    <div className="collection--item__title">
                                        Name Nft Name Nft
                                    </div>
                                </div>
                            </div>
                            <div className="next--btn" ref={refNext} onClick={() => scrollingToNext()}>
                                <svg className="arrow--scroll reverse" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.54297 10.582L10.5502 19.5892M1.54297 10.582L10.5502 1.57481M1.54297 10.582L23.2883 10.582" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default ProfileNftCollection