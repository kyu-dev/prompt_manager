import bcrypt from 'bcrypt';
import client from '../utils/db.js';

export const loginUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      message: 'Connexion réussie !',
      user: req.user, // ← là tu renvoies bien l'utilisateur au frontend
    });
  } else {
    res.status(401).json({ message: 'Non autorisé' });
  }
};
//teste

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.json({ message: 'Erreur lors de la déconnexion.' });
    }
    res.json({ message: 'Déconnexion réussie.' });
  });
};

export const profile = (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Bonjour ${req.user.username}`);
  } else {
    res.send('Veuillez vous connecter.');
  }
};

export const register = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const res = await client.query(
      'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
      [username, hashedPassword, email]
    );
    res.status(201).send('Utilisateur créé avec succès.');
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    res.status(500).send("Erreur lors de la création de l'utilisateur.");
  }
};

export const checkSession = async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ error: 'Session expired' });
  }
};
