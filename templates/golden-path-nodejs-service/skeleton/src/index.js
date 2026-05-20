const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to ${{ values.name }}'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

module.exports = app;
