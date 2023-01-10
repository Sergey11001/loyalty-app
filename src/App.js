import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import {Routes,Route} from "react-router-dom";
import Loyalty from "./pages/Loyalty";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelfId } from "./store/reducer";
import { Loading } from "./UI/Loading";

function App() {
  const { nftContract, passNftContract, signerAddr, loading } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nftContract) {
      nftContract.on("Mint(address,uint256)", (address, id) => {
        console.log("Mint: ", address, id);
        if (signerAddr === address) {
          dispatch(setSelfId(Number(id)))
        }
      })

      passNftContract.on("Mint(address,uint256)", (address, id) => {
        console.log("Pass ID Mint: ", address, id);
        if (signerAddr === address) {
          dispatch(setSelfId(Number(id)))
        }
      })
    }
  }, [nftContract, signerAddr, dispatch, passNftContract])

  return (
    <div className="wrapper">
        {loading && <Loading />}
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
