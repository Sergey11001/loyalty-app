
const Input = ({label,type}) => {
    return (
        <>
            <div className="input--block__wrapper">
                <input className="input--block" type={type} placeholder={label} />
            </div>
        </>
    )
}
export default Input