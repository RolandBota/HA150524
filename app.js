const express = require('express');
const app = express();
const port = 3001;

// Beispielwerte für hobbys und einkaufsliste
const hobbys = ['Lesen', 'Kochen', 'Radfahren'];
const einkaufsliste = ['Milch', 'Brot', 'Obst'];

// GET-Endpunkt für hobbys
app.get('/hobbys', (req, res) => {
    res.json(hobbys);
});

// GET-Endpunkt für einkaufsliste
app.get('/einkaufsliste', (req, res) => {
    res.json(einkaufsliste);
});

// Server starten
app.listen(port, () => {
    console.log(`Express-Server läuft auf Port ${port}`);
});
