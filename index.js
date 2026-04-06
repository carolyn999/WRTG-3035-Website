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

app.listen(3000, () => console.log('Server running on http://localhost:3000'));