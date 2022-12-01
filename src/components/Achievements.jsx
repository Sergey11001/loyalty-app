
import achiv1 from "../assets/achiv/1.png"
import achiv2 from "../assets/achiv/2.png"
import achiv3 from "../assets/achiv/3.png"
import arrow from "../assets/arrow_diag.svg"

const Achievements = () => {
    return (
        <>
            <div className="achievements--block">
                <div className="achievements--block__body">
                    <a href="#" className="achievements--block__more">
                        <img src={arrow} alt="more"/>
                    </a>
                    <div className="achievements--block__title">
                        Achievements
                    </div>
                    <ul className="achievements__list">
                        <li className="achievements__list--item">
                            <div className="achievement__item--wrapper">
                                <img src={achiv1} alt=""/>
                            </div>
                        </li>
                        <li className="achievements__list--item">
                            <div className="achievement__item--wrapper">
                                <img src={achiv2} alt=""/>
                            </div>
                        </li>
                        <li className="achievements__list--item">
                            <div className="achievement__item--wrapper">
                                <img src={achiv1} alt=""/>
                            </div>
                        </li>
                        <li className="achievements__list--item">
                            <div className="achievement__item--wrapper">
                                <img src={achiv3} alt=""/>
                            </div>
                        </li>
                        <li className="achievements__list--item">
                            <div className="achievement__item--wrapper">
                                <img src={achiv1} alt=""/>
                            </div>
                        </li>
                        <li className="achievements__list--item">
                            <div className="achievement__item--wrapper">
                                <img src={achiv2} alt=""/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Achievements