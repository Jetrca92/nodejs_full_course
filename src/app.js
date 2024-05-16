const express = require('express');
const mongoose = require('mongoose');
const doetnv = require('dotenv');

const app = express();
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV !== 'production') {
    doetnv.config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/api/customers', (req, res) => {
    res.send({"customers": customers});
})

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

const start = async() => {
    try{
        await mongoose.connect(CONNECTION);
    
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });
    } catch(e) {
        console.log(e.message)
    }
    
};

start();
