// memanggil library express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// port yang akan digunakan
const port = 8000;

// memanggil library body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


// memanggil router
const appRoute = require('./src/routes/route');
app.use('/api', appRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});