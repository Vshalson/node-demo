import express from 'express';
import routes from './sources/routes/route.js';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.listen(PORT, HOST, function () {
  console.log(`Server started at http://${HOST}:${PORT}`);
});
