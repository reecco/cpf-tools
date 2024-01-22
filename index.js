const express = require('express');
const routes = require('./src/routes/index');
const { access } = require('./src/middlewares/index');

const port = 3000;
const app = express();

access(app);
routes(app);

app.listen(port, () => console.log(`http://localhost:${port}`));