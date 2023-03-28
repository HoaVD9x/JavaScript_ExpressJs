import Express from 'express';
import HomeController from '../Controllers/HomeController';
import UserController from '../Controllers/UserController';
let router = Express.Router();
let initWebRouter = (app) => {
	router.get('/', HomeController.getHomePage);
	router.post('/postDemo', HomeController.DemoPost);
	router.post('/api/login', UserController.handlerLogin);

	return app.use('/', router);
};
module.exports = initWebRouter;
