import Home from "./Components/pages/Home";
 import About from "./Components/pages/About";
 import Portfolio from "./Components/pages/Portfolio";
import NavBar from "./Components/pages/NavBar";
 import SocialLinks from "./Components/pages/SocialLinks";
 import Experience from "./Components/pages/Experience";
  import Contact from "./Components/pages/Contact";
 import Footer from "./Components/pages/Footer";
 

function App() {
  return (
    <div>
      <NavBar/>
       <Home/>
       <About/>
       <Portfolio/>
       <Experience/>
      <Contact/>
      <Footer/>
      <SocialLinks/> 

    </div>
  );
}

export default App;
