import Express from 'express';
import HomeController from '../Controllers/HomeController';
let router = Express.Router();
let initWebRouter = (app) => {
	router.get('/', HomeController.getHomePage);
	router.post('/postDemo', HomeController.DemoPost);

	return app.use('/', router);
};
module.exports = initWebRouter;
