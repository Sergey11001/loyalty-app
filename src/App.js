import Header from "./components/Header";
import Footer from "./components/Footer";
import NftList from "./components/NftList";
import Popup from "./components/Popup";

import profile from "./assets/profile/profile.png"
import figure from "./assets/connect-wallet/figure.png"
import Loyalty from "./pages/Loyalty";
import Admin from "./pages/Admin";
import TopPanel from "./components/TopPanel";




function App() {
  return (
    <div className="wrapper">
        <Header />
        <Admin />
        <Footer/>
        <Popup />
    </div>
  );
}

export default App;
