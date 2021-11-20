const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Clonehoot!' });
});

router.get('/index.ejs', (req, res) => {
    res.render('index', { title: 'Clonehoot!' });
  });

router.get('/login.ejs', (req, res) => {
  res.render('login', { title: 'Inicia Sesión' });
});

router.get('/main.ejs', (req, res) => {
    res.render('main', { title: 'Clonehoot!' });
});

module.exports = router;