const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Caraboumga78180.',
    database: 'users' // Assurez-vous que la base de données 'users' existe
});

// Vérifiez si la connexion à la base de données réussit
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à MySQL:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

// Route de test
app.get('/', (req, res) => { 
    return res.json("from backend side");
});

// Route pour récupérer les utilisateurs
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM new_users"; 
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Erreur lors de la requête SQL:', err); // Log l'erreur
            return res.status(500).json({ error: err.message });
        }
        return res.json(data);
    });
});

// Route pour ajouter un utilisateur
app.post('/users', async (req, res) => {
    console.log('Données reçues:', req.body); // Log les données reçues
    const { name, email, password } = req.body;
    
    try {
        // Vérifier si l'utilisateur existe déjà
        const checkUserSql = "SELECT * FROM new_users WHERE email = ?";
        db.query(checkUserSql, [email], async (err, result) => {
            if (err) {
                console.error('Erreur lors de la requête SQL:', err);
                return res.status(500).json({ error: err.message });
            }

            if (result.length > 0) {
                return res.status(409).json({ error: 'Utilisateur déjà existant' });
            }
            
            const hashedPassword = await bcrypt.hash(password, 10);

            const sql = "INSERT INTO new_users(name, email, password) VALUES (?, ?, ?)";
            db.query(sql, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('Erreur lors de la requête SQL:', err);
                    return res.status(500).json({ error: err.message });
                }
                const newUser = { id: result.insertId, name, email };
                return res.status(201).json(newUser);
            });
        });
    } catch (error) {
        console.error('Erreur lors du hachage du mot de passe:', error);
        return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.listen(8081, () => { 
    console.log("listening on port 8081");
});
