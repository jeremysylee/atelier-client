const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router.js');
const path = require('path');
const app = express();
const port = 3000;
// const atelierHelper = require('./atelierHelper.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

// app.get('/:id', (req, res) => {
//   express.static(path.join(__dirname, '../client/dist'));
//   console.log('hello');
//   res.status(200).redirect('/');
// });
app.use('/api', router);

app.listen(port, err => {
  err ? console.log(err) : console.log(`Server listening on port ${port}`);
});

