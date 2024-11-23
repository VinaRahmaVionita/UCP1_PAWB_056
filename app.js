const express = require('express');
const bodyParser = require('body-parser');
const bibitRouter = require('./router/bibit.js'); 

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

// Use the pupuk router
app.use('/bibit', bibitRouter);

app.get("/", (req, res) => {
    res.send("Selamat pagiii");
});

app.listen(PORT, () => console.log(`Server berjalan di Port : http://localhost:${PORT}`));