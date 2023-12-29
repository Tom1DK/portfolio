import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import TrackVisibility from "react-on-screen";
import 'animate.css';

import headerImg from "../assets/img/header-img.png";

export const Banner = () => {

    const toRotate = ["a Web Developer", "a Web Designer", "still learning..."];

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce animate__fast" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi, my name is Tommy, I am `}<span className="wrap">{text}</span></h1>
                                    <p>I am a self-taught front-end developer. I have been learning web development and software engineering for about 8 months now and am looking forward to see where my journey takes me! If you're looking for a junior web-developer feel free to contact me.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}