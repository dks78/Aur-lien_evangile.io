// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import header from '../assets/img/colombe.webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Moi = () => {
    // const [loopNum, setLoopNum] = useState(0);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const [text, setText] = useState('');
    // const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    // const toRotate = ["Bonjour , je m'apelle Aurélien étudiant en dev "];
    // const period = 1000;


    // useEffect(() => {
    //     let ticker = setInterval(() => {
    //         tick();
    //     }, delta);

    //     return () => { clearInterval(ticker) };
    // }, [text])



    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //     setText(updatedText);

    //     if (isDeleting) {
    //         setDelta(prevDelta => prevDelta / 2);
    //     }

    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setIndex(prevIndex => prevIndex - 1);
    //         setDelta(period);
    //     } else if (isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNum(loopNum + 1);
    //         setIndex(1);
    //         setDelta(500);
    //     } else {
    //         setIndex(prevIndex => prevIndex + 1);
    //     }
    // }
    // fin du text deroulant 

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center ">
                    <Col xs={12} md={6} xl={7} className="d-flex flex-column justify-content-center align-items-center text-center">
                        <span className="tagline">Bienvenu sur mon Portfolio</span>
                        <h1><span className="wrap">Bonjour je m'appele Aurelien j'ai 26 ans</span></h1>
                        <p>Jeune Adulte qui durant toute son enfance et adolescence a sombré dans l'alcool La drogue et autre.
                             Mais ma vie a totalement changé quand j'ai rencontré le seigneur Jésus , et que je l'ai accepté comme seigneur et sauveur
                        </p>
                        <a href="#temoignage">
                            <button>Mon témoignage<ArrowDownCircle size={25} /></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img id="imageHeader" src={header} alt="Herader img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

