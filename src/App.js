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
import bgbg2 from "./assets/bgbg2.png";
import bottle from "./assets/spray-bottle.png";
import cleaning from "./assets/cleaning.jpg";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Parallax strength={-100} bgImage={bgbg2}>
        <div className="container">
          <section className="intro">
            <div className="intro-info">
              <img id="intrologo" src={logo} alt="Picture of Casey Cotter" />
              <h5>Casey Cares Creations</h5>
              <h1 className="display-1">Casey Cotter</h1>
              <h3 className="text-light">Professional House Cleaner </h3>
              <p>
                Energetic, Passionate and Friendly House Cleaner from New Paltz,
                NY with over 7 years of experience.{" "}
                <span>Cleaning for the hudson valley area.</span> I enjoy
                working in a relaxed and friendly environment and I'm motivated
                by humanitarian work and enjoy working on people-centered
                problems.{" "}
              </p>
            </div>
            <div>
              <img id="caseyface" src={casey} alt="Picture of Casey Cotter" />
              <h3 className="text-dark"> - Casey Cotter</h3>
              <p className="text-dark">
                "Hi there, I'm Casey Cotter from New Paltz, NY. I'm passionate
                about helping others improve their life quality. I hope I can be
                of help to you as well!"
              </p>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax strength={-300} bgImage={cleaning}>
        <div className="container">
          <section className="about">
            <h3 className="display-3 text-dark">About Me</h3>
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
                <p className="text-dark">Prices are dependent on the job</p>
                <h4>Thank you very much</h4>
              </div>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax>
        <div className="container">
          <section className="contact">
            <h3 className="display-3">Contact Section</h3>
            <div>
              <h3 className="py-5">
                {" "}
                Contact me today and let's set up an appointment!
              </h3>
              <h4>Email: caseycare87@gmail.com</h4>
              <h4>Phone: (845) 926 2450</h4>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/casey.cotter.3">
                <h3>Facebok</h3>
              </a>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax>
        <div className="container">
          <section className="resume">
            <div>
              <h3 className="diplay-5 my-5">
                {" "}
                Click on the button below to view my resume!
              </h3>
              <a
                href="https://www.google.com/"
                target="_blank"
                className="btn-slide my-5"
              >
                Click Here For Resume
              </a>
            </div>
          </section>
        </div>
      </Parallax>

      <Footer />
    </div>
  );
}

export default App;
