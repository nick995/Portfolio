import "./app.scss"
import NavBar from "./components/navbar/Navbar";
import Introduce from "./components/introduce/Introduce"
import About from "./components/about/about"
const App = () => {
  return <div>
    <section id= "Homepage"> <NavBar/> <Introduce/> </section>

    {/* <section id= "About">Parallax</section> */}
    
    <section id= "About"><About/> </section>
    
    <section id = "Portfolio">Parallax</section>
    
    <section>Portfolio1</section>
    
    <section id= "Contact"> Parallax</section>

    <section>Contact</section>
    
    </div>;
};

export default App;
