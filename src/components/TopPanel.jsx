import _ from "lodash"
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { FloatImg } from "./FloatImg";
import { useEffect, useRef, useState } from "react";

const TopPanel = ({ admin }) => {
    const { signerAddr } = useSelector((state) => state.web3)
    const [attrs, setAttrs] = useState([])
    const blockRef = useRef(null)

    useEffect(() => {
        setAttrs(_.times(12).map((id) => {
            const info = {}
            info.id = id + 1;
            info.transition = "0.5s"
            info.transitionDelay = "0"
            info.isConnected = !!signerAddr

            return info
        }))
    }, [signerAddr])

    return (
        <div className="connect--wallet">
            <div className="main--container">
                <div className={cn("connect--wallet__body", {
                    "connect--wallet__body_active": !!signerAddr 
                })} >
                    <div className="body__bg" ref={blockRef}>
                        {
                            attrs.map((info) => 
                                <FloatImg
                                    maxWidth={blockRef.current.offsetWidth}
                                    maxHeight={blockRef.current.offsetHeight}
                                    isConnected={info.isConnected}
                                    transition={info.transition}
                                    transitionDelay={info.transitionDelay}
                                    id={info.id}
                                    key={info.id}
                                />
                            )
                        }
                    </div>

                    <div className="connect--wallet__content">
                        <div className="connect--wallet__title">
                            Loyalty Program
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopPanel