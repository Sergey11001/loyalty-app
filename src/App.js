import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import {Routes,Route} from "react-router-dom";
import Loyalty from "./pages/Loyalty";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelfId } from "./store/reducer";

function App() {
  const { nftContract, signerAddr } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nftContract) {
      nftContract.on("Mint(address,uint256)", (address, id) => {
        console.log("Mint: ", address, id);
        if (signerAddr === address) {
          dispatch(setSelfId(Number(id)))
        }
      })
    }
  }, [nftContract, signerAddr, dispatch])

  return (
    <div className="wrapper">
        <Header />
        <Routes>
            <Route path="/" element={<Loyalty />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
