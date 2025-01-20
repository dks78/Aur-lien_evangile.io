
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import etude from '../assets/img/top-view-people-reading-together.jpg'
import partage from '../assets/img/roommates-sharing-meal-together.jpg'
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image, card } from 'react-bootstrap';
import '../card.css';
export const Activite = () => {
    const [progress, setProgress] = useState(50);
    const [active, setActive] = useState(0);
    const [isDown, setIsDown] = useState(false);
    const startX = useRef(0); // Référence pour la position initiale du drag
    const $items = useRef(null); // Référence à la collection des éléments du carousel

    // Variables constantes
    const speedWheel = 0.02;
    const speedDrag = -0.1;

    // Fonction pour obtenir le zIndex basé sur l'index
    const getZindex = (array, index) => {
        return array.map((_, i) =>
            index === i ? array.length : array.length - Math.abs(index - i)
        );
    };

    // Fonction pour afficher les éléments du carousel avec animation
    const displayItems = (item, index, active) => {
        const zIndex = getZindex([...$items.current.children], active)[index];
        item.style.setProperty('--zIndex', zIndex);
        item.style.setProperty('--active', (index - active) / $items.current.children.length);
    };

    // Fonction d'animation
    const animate = () => {
        if (!$items.current) return; // Vérifiez si la référence existe
        const clampedProgress = Math.max(0, Math.min(progress, 100)); // Assurez-vous que la progression est comprise entre 0 et 100
        const activeIndex = Math.floor((clampedProgress / 100) * ($items.current.children.length - 1));
        setActive(activeIndex);

        // Appliquer l'animation à chaque élément
        Array.from($items.current.children).forEach((item, index) => displayItems(item, index, activeIndex));
    };

    // Gestion du wheel (scroll de la souris)
    const handleWheel = (e) => {
        const wheelProgress = e.deltaY * speedWheel;
        setProgress((prevProgress) => {
            const newProgress = prevProgress + wheelProgress;
            return Math.max(0, Math.min(100, newProgress)); // Limiter la progression entre 0 et 100
        });
    };

    // Gestion des mouvements de souris (drag)
    const handleMouseMove = (e) => {
        if (isDown) {
            const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            const mouseProgress = (x - startX.current) * speedDrag;
            setProgress((prevProgress) => {
                const newProgress = prevProgress + mouseProgress;
                return Math.max(0, Math.min(100, newProgress));
            });
            startX.current = x;
        }
    };


    const handleMouseDown = (e) => {
        setIsDown(true);
        startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };


    const handleMouseUp = () => {
        setIsDown(false);
    };

    useEffect(() => {
        animate();
    }, [progress]);

    useEffect(() => {
        const handleWheelEvent = (e) => handleWheel(e);
        const handleMouseDownEvent = (e) => handleMouseDown(e);
        const handleMouseUpEvent = () => handleMouseUp();
        const handleMouseMoveEvent = (e) => handleMouseMove(e);

        document.addEventListener('wheel', handleWheelEvent);
        document.addEventListener('mousedown', handleMouseDownEvent);
        document.addEventListener('mousemove', handleMouseMoveEvent);
        document.addEventListener('mouseup', handleMouseUpEvent);
        document.addEventListener('touchstart', handleMouseDownEvent);
        document.addEventListener('touchmove', handleMouseMoveEvent);
        document.addEventListener('touchend', handleMouseUpEvent);


        return () => {
            document.removeEventListener('wheel', handleWheelEvent);
            document.removeEventListener('mousedown', handleMouseDownEvent);
            document.removeEventListener('mousemove', handleMouseMoveEvent);
            document.removeEventListener('mouseup', handleMouseUpEvent);
            document.removeEventListener('touchstart', handleMouseDownEvent);
            document.removeEventListener('touchmove', handleMouseMoveEvent);
            document.removeEventListener('touchend', handleMouseUpEvent);
        };
    }, [isDown, progress]);
    const images = [
        partage,
        etude
    ];
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const showSlide = (index) => {
        setCurrentSlideIndex(index);
    };
    const handleAction = (action) => {
        if (action === 'next') {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (action === 'prev') {
            setCurrentSlideIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
        }
    };
    return (
        <section className='Activite'>
            <div className="temoignage-textActivite">
                <div class="module-header">
                    <h2 class="module-title scroll-animate2">Activité
                        <span>rejoins-nous</span>
                    </h2>
                </div>
                <section className="py-5 text-center container">
                    <div className="row text-center">
                        <div className="mx-auto">
                            <p className="text-body-secondaryAcitivite">
                                <h2>Nos activités </h2>
                                Nous organisons plusieurs activités. Tu peux nous rejoindre avec grand plaisir pour des moments de partage, des moments de jeux, des sorties entre amis, de nouvelles rencontres, des moments d'apprentissage de la parole, des instants de joie et de bonne humeur, ainsi que des voyages. Bref, vous êtes les bienvenus au cœur de la CMCI Paris.
                                Vous serez également enseignés sur de nombreux sujets qui préoccupent les jeunes, tels que :
                                Comment vivre une vie chrétienne tout en marchant avec Dieu et être excellent à l'école.
                                Comment se marier selon la volonté de Dieu.
                                Comment avoir une vie sans péché.
                                Connaître qui est le Dieu que nous cherchons.
                                Comment avoir une relation avec le Dieu vivant et bien d'autres sujets.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="carousel-container2">
                <div className="carousel2" ref={$items}>
                    {[
                        { title: "Etude biblique", num: 1, img: etude },
                        { title: "Retraite , jeux😍", num: 2, img: partage },
                        { title: "Culte commun 😊", num: 3, img: "https://iili.io/2C06OOX.jpg" },
                        { title: "Club de l'ecture🤩", num: 4, img: "https://iili.io/2C064g2.jpg" },
                        { title: "grand événement", num: 5, img: "https://iili.io/2C06mqx.jpg" },
                        { title: "Féte de fin d'année", num: 6, img: "https://iili.io/2C06mqx.jpg" },
                    ].map((item, index) => (
                        <div className="carousel-item2" key={index} onClick={() => setProgress((index / 10) * 100 + 10)}>
                            <div className="carousel-box2">
                                <div className="title">{item.title}</div>
                                <div className="num">{item.num}</div>
                                <img src={item.img} alt={`Slide ${item.num}`} />
                            </div>
                        </div>
                    ))}
                </div>
                <a href="https://www.instagram.com/college_wishlist" target="_blank" className="logo">C</a>
                <div className="social">
                    <a href="#" target="_blank"><svg><use xlinkHref="#ico-linkedin" /></svg></a>
                    <a href="https://www.instagram.com/college_wishlist" target="_blank"><svg><use xlinkHref="#ico-instagram" /></svg></a>
                </div>
                <div className="cursor"></div>
                <div className="cursor cursor2"></div>
            </section>
            <Container>
                <div className="image-slider">
                    {/* Texte dynamique associé à chaque image */}
                    <p className="slider-text">{[
                        "Rejoignez-nous pour nos moments d'étude biblique, riches en partage et apprentissage de la parole ! vous aller apprendre , les etudes son portez sur différente histoire de la b",
                        "Découvrez la joie et la convivialité avec nos activités de groupe : jeux, repas partagés, et bien plus !",
                        "Participez à nos cultes communs pour des moments spirituels et communautaires exceptionnels !",
                        "Joignez-vous à notre club de lecture pour explorer des œuvres inspirantes et partager vos réflexions !",
                        "Ne manquez pas nos grands événements : des moments uniques à vivre ensemble dans la foi !",
                        "Célébrez avec nous la fin d'année lors de nos festivités joyeuses et pleines de surprises !"
                    ][currentSlideIndex]}</p>
                    <section className="slider__content">
                        {/* Bouton pour aller à la slide précédente */}
                        <button
                            type="button"
                            className="slider-control--button prev-button"
                            onClick={() => handleAction('prev')}
                        >
                            <svg
                                color='white'
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="icon arrow-left-circle"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                                />
                            </svg>
                        </button>
                        {/* Affichage de l'image courante */}
                        <main className="image-display">
                            <Image src={images[currentSlideIndex]} fluid />
                        </main>
                        {/* Bouton pour aller à la slide suivante */}
                        <button
                            type="button"
                            className="slider-control--button next-button"
                            onClick={() => handleAction('next')}
                        >
                            <svg
                                color='white'
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="icon arrow-right-circle"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                                />
                            </svg>
                        </button>
                    </section>
                    {/* Navigation des slides (miniatures) */}
                    <nav className="slider-navigation">
                        {images.map((src, index) => (
                            <button
                                key={index}
                                className="nav-button"
                                aria-selected={currentSlideIndex === index}
                                onClick={() => showSlide(index)}
                            >
                                <img className="thumbnail" src={src} alt={`Thumbnail ${index + 1}`} />
                            </button>
                        ))}
                    </nav>
                </div>
            </Container>
        </section>
    );
};
