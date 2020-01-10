import { Router } from 'express';

import swagger from './swagger';

const routes = new Router();

swagger.setRoutes(routes);

routes.get('/customers', (req, res) => {
    res.send('Customer results');
});

routes.put('/customers', (req, res) => {
    res.send('Successful updated customers');
});

export default routes;
