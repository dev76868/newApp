//const express = require('express');
//const admobSSV = require('admob-rewarded-ads-ssv');

import express from 'express'
const admobSSV = require('admob-rewarded-ads-ssv');


const app = express(); // <-- Eksik olan bu satır



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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});