const path = require('path');
const express = require('express');
const apiRoutes = require('./controllers/api');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on routes
app.use('/api', apiRoutes);

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

  app.listen(PORT, () => console.log('Now listening'));
