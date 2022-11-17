const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const apiRouter = require('./api.js');
// const DIST_DIR = path.join(__dirname, './build');
// const HTML_FILE = path.join(__dirname, './client/index.html');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRouter);
// app.use(express.static(DIST_DIR));




//handle requests for static files
app.use(express.static(path.resolve(__dirname, './build')));

//to get to my DB
app.get('/api', (req,res) => {
    return res.status(200);
})


// app.get('/', (req, res) => {
//     return res.status(200).sendFile(HTML_FILE);
// })



//catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Wrong Page!!!'));

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred'},
    }
    const errObj = Object.assign({}, defaultErr, err);
    console.log(errObj);
    return res.status(errObj.status).json(errObj.message);
});

//starts my server
app.listen(PORT, () => console.log('Server is running'));

module.exports = app;