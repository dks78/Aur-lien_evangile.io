import React from 'react';
import { Container, Row, Col, Carousel ,} from 'react-bootstrap';
import { ArrowDownCircle } from "react-bootstrap-icons";

import image1 from '../assets/img/apres.png';
import image2 from '../assets/img/avant.png';
import hopitale from '../assets/img/hopitale.png'
import tribunale from '../assets/img/tribunale.png'

export const Temoignage = () => {

    return (
        <Container className="temoignage my-5" >           
            <div id='temoignage'/>
            <h2 className="text-center mb-4">Les Témoignages</h2>  
            <Row className="d-flex align-items-center temoiMargin">
                {/* Colonne pour le Carousel à gauche */}
                <Col md={6}>
                    <Carousel fade={true} className='w-100'>
                        <Carousel.Item>
                            <img className="d-block w-100" src={image1}   alt="First slide" />
                            <Carousel.Caption>
                                <h3>Avec Jésus</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={image2} alt="Second slide" /> 
                            <Carousel.Caption>
                                <h3>sans Jésus</h3>
                            </Carousel.Caption>                                       
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={6}>
                    <div className="temoignage-text">
                        <section className="py-5 text-center container">
                            <div className="row text-center">
                                <div className="  mx-auto">
                                    <p className="text-body-secondary">
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
                </Col>
                <a className='lienGuerison' href="#Guérison">
                    <button className='Mguerison'>Ma Guérison<ArrowDownCircle size={25} /></button>
                </a>
            </Row>
            <div id='Guérison'></div>
            <Row className="d-flex align-items-center guerison">
                <Col xs={12} md={6} className="text-start">
                    <h2>Ma guérison</h2>
                    <p className='text-body-secondary  '>
                        Sans Jésus, je pouvais souvent me retrouver à l'hôpital. À force de fumer, 
                        j'avais attrapé un problème aux bronches. Je faisais des bronchites violentes, nécessitant une prise en charge médicale.
                . Mais depuis que ma vie avec Jésus a commencé, 
                        cette maladie a disparu. Je vais vous expliquer comment : 
                        un jour, la maladie est revenue comme les autres fois.Mais cette fois-ci, 
                        je suis allé chez mon pasteur, 
                        et il a prié pour moi. Le soir,
                        en rentrant chez moi, j'ai commencé à faire un rêve, et à mon réveil, la maladie avait presque disparu. 
                        Je me suis rendormi, j'ai fait un deuxième rêve, et la maladie avait encore diminué. Au final, 
                        je suis simplement allé voir le médecin,
                        je ne suis pas allé à l'hôpital. Depuis, je n'ai plus jamais mis les pieds dans un hôpital.
                        Un jour, la maladie a voulu revenir, 
                        mais j'ai prié pour guérir, et je suis allé à la prière avec l'église. 
                        La seule maladie que j'ai eue, c'était une voix cassée.
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <img src={hopitale} alt="Example description" className="img-fluid" />
                </Col>
            </Row>
            <Row className='d-flex align-items-center'>
                <Col xs={12} md={6}>
                    <img src={tribunale} alt="tribunale" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <div className="temoignage-text">
                        <section className="py-5 text-center container">
                            <div className="row text-center">
                                <div className="  mx-auto">
                                    <p className="text-body-secondary">
                                        <h2>Tribunale </h2>
                                        Sans jésus, comme je l'ai mentionné, j'avais souvent des problèmes de justice 
                                        j'ai multiplié les gardes-à-vue pour des faits de violence,
                                        drogue etc ..., un jour durant ma vie de lycéen j'ai été conduit 
                                        à aller dans un internat,
                                        je m'étais mis en couple avec une fille, 
                                        un jour elle a subi des attouchements
                                        sexuels, un viol par un des camarades de l'école,
                                        résultat j'ai mis des coups de couteaux à son agresseur.
                                        la gendarmerie est venue me récupérer dans mon établissement scolaire,
                                        j'ai eu cinq ans de sursis ...
                                        Quelques années aprés j'étais
                                        parti devant un de mes anciens lycées, il était tôt le matin j'étais déjà alcoolisé,
                                        un gars m'a regardé, 
                                        je lui ai dit: "pourquoi tu me regardes mal",
                                        , je l'ai giflé il 
                                        s'est défendu et m'a jeté au sol,
                                        j'ai réagi et mis plusieurs
                                        coups de brises vitre dans la téte,
                                        j'étais venu avec un brise vitre dans ma poche
                                        suite a ça j'ai été comdamné. Au début 
                                        la juge a demandé 1 ans de prison ferme ,
                                        J'ai fait appel de la décision et 
                                        j'étais en attente d'une réponse. 
                                        Le jour où j'ai
                                        donné ma vie au Seigneur Jésus,
                                        j'ai reçu la réponse. J'avais
                                        été condamné à un an de bracelet électronique.
                                        Durant cette période,
                                        J'ai lu beaucoup la Bible,
                                        j'ai commencé à marcher avec Dieu, 
                                        avec l'église où je me rend on a prié
                                        pour que je sois totalement délivré sans aucune condamnation,
                                        j'avais demandé a la SPIP de faire
                                        une demnade de liberté conditionelle, 
                                        elle a répondu :" je pars en vacance, 
                                        on régle ça quand je reviens".
                                        Pendant qu'elle était en vacances, 
                                        la juge des application des peines JAP a appliqué une remise de peine de 6 mois
                                        et j'ai été délivré totalement sans aucune condamnation.
                                        Depuis, je n'ai plus eu d'ennuis avec la justice, ni commis d'autres faits de violence.

                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
