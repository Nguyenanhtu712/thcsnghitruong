import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Activities from "./pages/Activities";
import News from "./pages/News";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/hoat-dong" element={<Activities />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/thanh-tich" element={<Achievements />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;