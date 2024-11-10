import { useEffect, useState } from "react";
import { Form, Container, Row, Col, Alert, Table } from "react-bootstrap";
import axios from 'axios';

export const Contact = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        fetch('http://localhost:8081/users')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erreur lors de la récupération des utilisateurs');
                }
                return res.json();
            })
            .then(fetchedData => {
                setData(fetchedData);
            })
            .catch(err => console.error('Erreur lors de la récupération des utilisateurs:', err));
    }, []);
    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();  // Empêche le rafraîchissement de la page
        const newUser = { name, email, password };  // Crée un objet avec les données du formulaire
        // Réinitialiser les messages avant l'envoi
        setConfirmationMessage('');
        try {
            const response = await axios.post('http://localhost:8081/users', newUser);
            const addedUser = response.data;
            console.log('Utilisateur ajouté:', addedUser); // Log de l'utilisateur ajouté
            if (addedUser && addedUser.id) {  // Vérifie si l'utilisateur a été ajouté avec succès
                setData(prevData => [...prevData, addedUser]);  // Ajoute le nouvel utilisateur à la liste
                // Réinitialise les champs du formulaire
                setName('');  
                setEmail('');  
                setPassword('');  
                setConfirmationMessage('Utilisateur ajouté avec succès!');  // Met à jour le message de confirmation
                console.log('Champs réinitialisés'); // Debugging
            } else {
                alert('Vos informations ont bien été envoyées. Nous vous contacterons dans les plus brefs délais.');  // Affiche une alerte d'erreur
            }
        }  catch (error) {
            // Vérifie si c'est une erreur de conflit d'email existant
            if (error.response && error.response.status === 409) {
              alert('Ce mail existe déjà.');
            } else {
                console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
                setErrorMessage('Erreur lors de l\'ajout de l\'utilisateur.');
            }
        }
    };
    return (
        <Container className="ContactForm">
            <Row>
                <Col>
                <div className="text">
                    Contact us Form
                </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez le nom"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Entrez l'email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Entrez le mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <div className="inner"></div>
                                <input type="submit" value="submit" />
                            </div>
                        </div>
                    </Form>
                    {/* Afficher le message de confirmation si présent */}
                    {confirmationMessage && (
                        <Alert variant="success" className="mt-3">
                            {confirmationMessage}
                        </Alert>
                    )}
                </Col>
            </Row>
            { 
            <Row className="mt-5">
                <Col>
                    <h2>Liste des utilisateurs</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Mot de passe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row> 
            }
        </Container>
    );
};