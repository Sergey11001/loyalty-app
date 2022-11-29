import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Admin from "./pages/Admin";
import {Routes,Route} from "react-router-dom";
import Loyalty from "./pages/Loyalty";

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
