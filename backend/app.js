const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'qwer12421l', title: 'First server-sido post', content: 'This is coming server' },
    { id: 'fadf12421l', title: 'Second server-sido post', content: 'This is coming server' },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts
  });
});


module.exports = app;
