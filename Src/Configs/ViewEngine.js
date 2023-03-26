import Express from 'express';

let ConfigViewEngine = (app) => {
	app.use(Express.static('./src/public'));
	app.set('view engine', 'ejs');
	app.set('views', './src/views');
};

module.exports = ConfigViewEngine;
