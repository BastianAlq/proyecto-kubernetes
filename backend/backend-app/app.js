const express = require('express');
const app = express();
const PORT = 3000;

const backendPodName = process.env.MY_BACKEND_POD_NAME
const backendPodIp = process.env.MY_BACKEND_POD_IP

app.get('/api/random', (req, res) => {
  const randomData = {
    number: Math.floor(Math.random() * 100),
    timestamp: new Date().toISOString(),
    PodName: backendPodName,
    PodIp: backendPodIp
  };
  res.json(randomData);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
