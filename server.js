const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/checkout', (req, res) => {
    try {
        const cart = req.body;

        if (!cart || !Array.isArray(cart.items) || cart.items.length === 0) {
            return res.status(400).json({ message: 'Le panier est vide ou invalide.' });
        }

        console.log('Commande reçue:', cart);

        // Simulate saving the order to a database or processing it
        res.status(200).json({ message: 'Commande reçue avec succès!', order: cart });
    } catch (error) {
        console.error('Erreur lors du traitement de la commande:', error);
        res.status(500).json({ message: 'Une erreur est survenue lors du traitement de la commande.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

