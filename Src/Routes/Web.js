import Express from 'express';

let router = Express.Router();
let initWebRouter = (app) => {
	router.get('/', (req, res) => {
		return res.send('hello world !');
	});
	return app.use('/', router);
};
module.exports = initWebRouter;
