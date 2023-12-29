import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorBg1 from "../assets/img/color-bg1.png"
import skill1 from "../assets/img/html.png";
import skill2 from "../assets/img/css.png";
import skill3 from "../assets/img/javascript.png";
import skill4 from "../assets/img/bootstrap.png";
import skill5 from "../assets/img/react.png";
import skill6 from "../assets/img/c.png";
import skill7 from "../assets/img/vscode.png";

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My skills mostly revolve around web-development, however i also have some knowledge in <br />low-level languages like C# and C++. As well as .NET Framework, MySQL and Linux. </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={skill1} alt="HTML Icon" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="CSS Icon" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="JavaScript Icon" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="BootStrap Icon" />
                  <h5>BootStrap</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="React Icon" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="C Icon" />
                  <h5>C#/C++</h5>
                </div>
                <div className="item">
                  <img src={skill7} alt="C Icon" />
                  <h5>Visual Studio/Code</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorBg1} alt="" />
    </section>
  )
}