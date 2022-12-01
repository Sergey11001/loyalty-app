
const Input = ({label,type,style}) => {
    return (
        <>
            <div className="input--block__wrapper">
                <input className="input--block" type={type} placeholder={label} style={{...style}}  />
            </div>
        </>
    )
}
export default Input