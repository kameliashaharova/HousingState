const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const port = process.env.PORT_NUMBER || 80;

const apiProxy = httpProxy.createProxyServer();

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy Error');
});

app.all('/api/*', (req, res) => {
  // sends api requests to the backend
  console.log(req.path);
  apiProxy.web(req, res, {
    target: 'http://localhost:3000',
  });
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => console.log(`Front end server on port ${port}!`));
