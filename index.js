const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint para receber os dados de localização via SMS
app.post('/sms-location', (req, res) => {
    const { latitude, longitude } = req.body;

    // Aqui você pode armazenar os dados em um banco de dados ou sistema de armazenamento

    res.status(200).send('Dados de localização recebidos com sucesso.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
