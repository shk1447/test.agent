const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { initDb } = require('./db');

// Handle missing swagger.json safely
let swaggerDocument;
try {
  swaggerDocument = require('./swagger.json');
} catch (e) {
  console.warn('swagger.json not found, disabling swagger docs.');
  swaggerDocument = {};
}

const app = express();
const port = 3000;

// Initialize Database
initDb().then(() => {
  console.log('Database initialized.');
}).catch(err => {
  console.error('Database initialization failed:', err);
});

// 1. Swagger UI 적용
if (Object.keys(swaggerDocument).length > 0) {
  app.use(
    '/api-docs',
    swaggerUi(swaggerDocument)
  );
}

// 2. 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello from the Express Server in test.agent!');
});

// 3. Ping 라우트
app.get('/ping', (req, res) => {
  res.json({
    success: true,
    message: 'pong',
  });
});

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});