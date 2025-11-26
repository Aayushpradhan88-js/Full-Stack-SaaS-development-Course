//MAIN APPLICATION FILE

const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();
const bookRouter = require('./routes/bookRoutes');
const app = express();
const cors = require('cors');


app.use(cors({origin: 'http://localhost:5174'}));
app.use(express.json()); //parser the JSON data from the body.
app.use(express.urlencoded({ extended: true }));

app.use('/api/books', bookRouter);

//server port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});