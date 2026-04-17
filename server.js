const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Swagger 정의 파일 (새로 추가될 파일)

const app = express();
const port = 3000;

// 1. Swagger UI 적용
app.use(
  '/api-docs',
  swaggerUi(swaggerDocument)
);

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