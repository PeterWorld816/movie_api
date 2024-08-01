const express = require('express'),
    morgan = require('morgan');
const app = express();

app.use(express.static('public'));

app.use(morgan('common'));
const topMovies = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Goodfellas', year: 1990 }
];
app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

// Route to serve top 10 movies as JSON
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');});
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

