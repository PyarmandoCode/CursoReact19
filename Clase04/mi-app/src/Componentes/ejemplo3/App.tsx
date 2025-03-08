import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <Router >
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <Navbar/>
                <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center" >
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>

                </div>

            </div>
        </Router>
    );
};
export default App;