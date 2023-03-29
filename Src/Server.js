import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config();

import viewEngine from './Configs/ViewEngine';
import initWebRoute from './Routes/Web';
import connectDB from './Configs/ConnecDB';
import cors from 'cors';
let app = express();

app.use(
	cors({
		origin: 'http://localhost:3000', //アクセス許可するオリジン
		credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
		optionsSuccessStatus: 200, //レスポンスstatusを200に設定
	}),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoute(app);
connectDB();
let port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('listening on port' + port);
});
