import express from 'express';
import routes from './src/routes/index.js';
import { access } from './src/middlewares/index.js';

const port = 3000;
const app = express();

access(app);
routes(app);

app.listen(port, () => console.log(`http://localhost:${port}`));