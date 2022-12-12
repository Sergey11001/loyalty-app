import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export const FloatImg = ({ id, transition, transitionDelay, isConnected, maxWidth, maxHeight }) => {
  const { step } = useSelector((state) => state.ui);
  const [position, setPosiotion] = useState({})

  useEffect(() => {
    if (isConnected) {
      setPosiotion({
        left: Math.floor(Math.random() * 80) + "%",
        top: Math.floor(Math.random() * 50) + "%",
      })
    }
  }, [step])

  useEffect(() => {
    if (isConnected) {
      switch (id) {
        case 1:
          setPosiotion({
            left: "50%",
            top: "5%"
          })
          break;
        
        case 2:
          setPosiotion({
            left: "70%",
            top: "50%"
          })
          break;
        
        case 3:
          setPosiotion({
            left: "83%",
            top: "50%"
          })
          break;
        
        case 4:
          setPosiotion({
            left: "75%",
            top: "60%"
          })
          break;
        
        case 5:
          setPosiotion({
            left: "40%",
            top: "40%"
          })
          break;
        
        case 6:
          setPosiotion({
            left: "34%",
            top: "24%"
          })
          break;
        
        case 7:
          setPosiotion({
            left: "4%",
            top: "40%"
          })
          break;
  
        case 8:
          setPosiotion({
            left: "75%",
            top: "0%"
          })
          break;
  
        case 9:
          setPosiotion({
            left: "31%",
            top: "46%"
          })
          break;
        
        case 10:
          setPosiotion({
            left: "60%",
            top: "50%"
          })
          break;
  
        case 11:
          setPosiotion({
            left: "55%",
            top: "47%"
          })
          break;
                 
        default:
          setPosiotion({
            left: "52%",
            top: "56%"
          })
          break;
      }
    } else {
      setPosiotion({ left: "1000%", top: "1000%" })
    }
  }, [id, isConnected])

  return (
    <img
      className="float-img"
      src={require(`../assets/3d/${id}.png`).default}
      style={{ transition, transitionDelay, left: position.left, top: position.top }}
      alt=""
    />
  )
}