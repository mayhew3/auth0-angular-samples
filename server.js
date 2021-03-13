const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const { join } = require('path');

const app = express();

const port = process.env.SERVER_PORT || 4200;

app.use(morgan('dev'));

app.use(
  helmet({
    contentSecurityPolicy: {
      // reportOnly: true,
      directives: {
        'default-src': ["'self'"],
        'connect-src': ["'self'", 'https://*.auth0.com', 'localhost:3000'],
        'frame-src': ["'self'", 'https://*.auth0.com'],
        'base-uri': ["'self'"],
        'block-all-mixed-content': [],
        'font-src': ["'self'", 'https:', 'data:'],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', '*.gravatar.com'],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
      },
    },
  })
);

app.use('/', express.static(join(__dirname, '/')));

app.listen(port, () => console.log(`App server listening on port ${port}`));
