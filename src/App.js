import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import {Routes,Route} from "react-router-dom";
import Loyalty from "./pages/Loyalty";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

export const providerOptions = {
 coinbasewallet: {
   package: CoinbaseWalletSDK, 
   options: {
     appName: "Web 3 Modal Demo",
     infuraId: process.env.INFURA_KEY 
   }
 },
 walletconnect: {
   package: WalletConnect, 
   options: {
     infuraId: process.env.INFURA_KEY 
   }
 }
};

const web3Modal = new Web3Modal({
  providerOptions // required
});

function App() {
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
