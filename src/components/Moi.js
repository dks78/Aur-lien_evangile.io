import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import header from '../assets/img/colombe.webp';
import '@fortawesome/fontawesome-free/css/all.min.css';
import image1 from '../assets/img/apres.png';
import image2 from '../assets/img/avant.png';

export const Moi = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Bonjour , je m'apelle Aurélien j'ai 26 ans"];
    const period = 14000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])



    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    // fin du text deroulant 

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center ">
                    <Col xs={12} md={6} xl={7} className="d-flex flex-column justify-content-center align-items-center text-center">
                        <span className="tagline">Bienvenu sur mon Portfolio</span>
                        <h1><span className="wrap">{text}</span></h1>
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
            <section className="temoignage-background centere">
                <div className="temoignage-wrapper my-5">
                    <div id="temoignage" />
                    <div className="row d-flex align-items-start">
                        <div className="col-md-6">
                            <Carousel fade={true} className="w-100 carousel-scroll-animate">
                                <Carousel.Item>
                                    <img className="d-block w-100 img-circle mb-0" src={image1} alt="First slide" />

                                    <Carousel.Caption>
                                        <h3>Avec Jésus</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 img-circle mb-0"
                                        src={image2}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>sans Jésus</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-6">
                            <div className="temoignage-text mt-0">
                                <section className="py-0 text-center">
                                    <div className="row text-center">
                                        <div className="mx-auto">
                                            <h2>Qui-sui'je?</h2>
                                            <p className="text-body-secondary texte-temoigne">
                                                Bonjour, je suis un jeune croyant né en 1998 à Paris.
                                                J'ai commencé mon enfance de manière heureuse, je vivais avec mes deux parents. J'ai toujours vécu dans l'abondance, mais il y avait un problème : mon père était en conflit avec ma mère. Suite à cela, j'ai très vite détesté ma mère, au point de la frapper quand j'étais enfant.
                                                J'ai sombré dans l'alcool et la drogue très jeune. J'étais en échec scolaire total,
                                                et je me suis fait renvoyer de plusieurs établissements scolaires, aussi bien au collège qu'au lycée.
                                                J'ai fait pas mal de gardes à vue, etc. J'étais quelqu'un qui pouvait voler,
                                                même de la drogue aux gens. Je me suis retrouvé plusieurs fois à agresser des gens dans la rue à plusieurs reprises.
                                                Mais un jour, un homme a frappé à ma porte et m'a présenté l'Évangile. Avant, j'étais croyant, mais je vivais dans le péché,
                                                je n'étais pas sauvé. Mais le jour où j'ai accepté le Seigneur Jésus comme Seigneur et Sauveur dans ma vie, c'est là que tout a changé,
                                                j'ai été délivré du péché. Moi qui aimais voler, aujourd'hui, voler un paquet de bonbons me dérange. Moi qui étais en échec scolaire,
                                                j'ai fini troisième de ma classe en CAP. Jésus sauve.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

