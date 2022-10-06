import "./App.css";
import NavBar from "./components/NavBar";
import casey from "./assets/casey.jpg";
import Footer from "./components/Footer";
import { Parallax } from "react-parallax";
import bg1 from "./assets/background_14.png";
import bg3 from "./assets/background_5.jpg";
import grass from "./assets/grass.png";
import bgbg from "./assets/bgbg.png";
import logo from "./assets/logo.png";
import bgbg2 from "./assets/bg.png";
import irish from "./assets/irish.jpg";
import cleaning from "./assets/cleaning.jpg";
import painting from "./assets/painting.jpg";
import bg2 from "./assets/bg2.jpg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Parallax strength={-100} bgImage={bgbg2}>
        <div className="container">
          <section className="intro">
            <div className="intro-info">
              <img
                className="pt-5"
                id="intrologo"
                src={logo}
                alt="Picture of Casey Cotter"
              />
              <h5>Casey Cares Creations</h5>
              <h1 className="display-3 text-info">Casey Cotter</h1>
              <h3 className="text-light" id="darken">
                Professional House Cleaner{" "}
              </h3>
              <p className="text-dark">
                Energetic, Passionate and Friendly House Cleaner from New Paltz,
                NY with over 7 years of experience.{" "}
                <span id="darken">Cleaning for the Hudson Valley area.</span>I
                also do body and face painting. And I have worked in clubs and
                childrens events.
              </p>
            </div>
            <div>
              <img id="caseyface" src={casey} alt="Picture of Casey Cotter" />
              <h3 className="text-warning darken"> - Casey Cotter</h3>
              <p className="text-light caseyquote">
                "Hi there, I'm Casey Cotter from New Paltz, NY. I'm passionate
                about helping others improve their life quality. I hope I can be
                of help to you as well!"
              </p>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax strength={-300} bgImage={bg2}>
        <div className="container">
          <section className="about">
            <h3 className="display-3 text-dark">About Me</h3>
            <div>
              <h3>My Hobbies</h3>
              <p>
                I enjoy hiking, exploring new places, hanging out with friends
                and family. And I do face and body paintings!
                <br />
                <br />
                let me know if I can be of help ;)
                <br />
                <br />
                <img src={painting} />
              </p>
            </div>
            <div>
              <h3>...About Me...</h3>
              <p>
                Travelling is something I'm passionate about and I have visited
                numerous countries around the world.
                <br />
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
                <p className="text-warning">Prices are dependent on the job</p>
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
              <h4>
                <span className="text-secondary">Email:</span>{" "}
                caseycarescreations@gmail.com
              </h4>
              <h4>
                <spam className="text-secondary">Phone:</spam> (845) 926 2450
              </h4>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/casey.cotter.3">
                <h3 className="text-primary">Facebook</h3>
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
                View My Resume
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
