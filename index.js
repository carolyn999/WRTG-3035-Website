const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    partialsDir: path.join(__dirname, 'src/views/partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'resources')));

//Add routes here for home, loaner decks, contact, events, etc

app.get('/', (req, res) => {
    res.render('pages/home');
});
app.get('/home', (req, res) => res.render('pages/home'));
app.get('/contact', (req, res) => res.render('pages/contact'));
app.get('/events', (req, res) => res.render('pages/events'));
app.get('/loanerDecks', (req, res) => res.render('pages/loanerDecks'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));