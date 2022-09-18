import "./App.css";
import NavBar from "./components/NavBar";
import casey from "./assets/casey.jpg";
import Footer from "./components/Footer";
import { Parallax } from "react-parallax";
import bg1 from "./assets/background_14.png";
import bg2 from "./assets/background_15.png";
import bg3 from "./assets/background_5.jpg";
import grass from "./assets/grass.png";
import bgbg from "./assets/bgbg.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Parallax>
        <div className="container">
          <section className="intro">
            <div>
              <img id="intrologo" src={logo} alt="Picture of Casey Cotter" />
              <h1 className="display-1">Casey Cotter</h1>
              <h3>Professional House Cleaner </h3>
              <p>
                Energetic, Passionate and Friendly House Cleaner from New Paltz,
                NY with over 7 years of experience. I enjoy working in a relaxed
                and friendly environment and I'm motivated by humanitarian work
                and enjoy working on people-centered problems.{" "}
              </p>
            </div>
            <div>
              <img id="caseyface" src={casey} alt="Picture of Casey Cotter" />
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax bgImage={bg3}>
        <div className="container">
          <section className="about">
            <h3 className="display-3">About Me</h3>
            <div>
              <h3>My Hobbies</h3>
              <p>
                On my time off I enjoy hiking, exploring new places, hanging out
                with friends and family.{" "}
              </p>
            </div>
            <div>
              <h3>I love travelling</h3>
              <p>
                Travelling is something I'm passionate about and I have visited
                numerous countries around the world.
              </p>
            </div>
            <div>
              <h3>My Ambitions</h3>
              <p>
                I'm an aspiring writer. I like to write a lot and I hope that
                one day in the near future to sell my own book.
              </p>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax bgImage="grass">
        <div className="container">
          <section className="services">
            <h3 className="display-3">Services</h3>
            <div className="services-container">
              <div className="servicecard">
                <h3>Call to Negotiate</h3>
                <p>Prices are dependent on the job</p>
                <h4>Thank you very much</h4>
              </div>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax>
        <div className="container">
          <section className="contact">
            <div>
              <h4>Email: caseycare87@gmail.com</h4>
              <h4>Phone: 1 (123)-456-7890</h4>
            </div>
          </section>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;
