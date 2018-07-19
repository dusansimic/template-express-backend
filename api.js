const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/', (_req, res) => {
	console.log('Api is working!');
	res.send('Api is working!');
});

module.exports = apiRouter;
