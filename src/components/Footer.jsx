
const Footer = ({menuDropDown= false}) => {
    return (
        <footer className={menuDropDown ? "footer footer--dropdown" : "footer"}>
            <div className="main--container">
                <div className="footer--body">
                    <div className="footer--body__contact">
                        Contact HR
                        <a href="mailto:hr@skyrocket.fund" className="footer--body__contact--link">hr@skyrocket.fund</a>
                    </div>
                    <div className="footer--body__copyright">
                        Copyright © 2022 Loyalty Program
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer