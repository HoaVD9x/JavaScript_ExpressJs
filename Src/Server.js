import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config();

import viewEngine from './Configs/ViewEngine';
import initWebRoute from './Routes/Web';
import connectDB from './Configs/ConnecDB';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoute(app);
connectDB();
let port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('listening on port' + port);
});
