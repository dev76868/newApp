//const express = require('express');
//const admobSSV = require('admob-rewarded-ads-ssv');

import express from 'express'
const admobSSV = require('admob-rewarded-ads-ssv');

const app = express(); // <-- Eksik olan bu satır
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('Hello from Express!');
});

app.get('/ssv-verify', (req, res) => {
  // Eğer debug istiyorsan ikinci parametreyi true yap
  admobSSV.verify(req.url, true)
    .then(() => {
      console.log('✅ Verification Successful');
      res.status(200).send('SSV Verified');
    })
    .catch((e) => {
      console.error('❌ Verification Failed:', e.message);
      res.status(400).send('SSV Verification Failed');
    });
});

app.listen(3000, () => console.log('Server ready on port 3000.'));
module.exports = app;
