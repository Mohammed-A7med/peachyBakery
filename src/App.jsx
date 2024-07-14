import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Recipes from "./Components/Recipes/Recipes";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar/>
        <Home />
        <About/>
        <Recipes/>
        <Testimonials/>
        <ContactUs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
