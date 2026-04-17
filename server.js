const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the Express Server in test.agent!');
});

app.get('/ping', (req, res) => {
  res.json({
    success: true,
    message: 'pong',
  });
});

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});