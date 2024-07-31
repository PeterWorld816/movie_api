const express = require('express');
    morgan = require('morgan');
const app = express();

app.use(express.static('public'));

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

// Route to serve top 10 movies as JSON
app.get('/movies', (req, res) => {
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
  res.json(topMovies);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

