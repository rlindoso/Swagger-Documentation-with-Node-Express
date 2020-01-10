import { Router } from 'express';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const routes = new Router();

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Customer API",
            description: "Customer API information",
            contact: {
                name: "Amazing developer"
            },
            servers: ["http://localhost:5000"]
        }
    },
    // ['./src/models/*.js']
    apis: ["./src/routes.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /customers:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          '200':
 *              description: A successful response
 */
routes.get('/customers', (req, res) => {
    res.send('Customer results');
});

 /**
 * @swagger
 * /customers:
 *  put:
 *      description: Use to update all customers
 *      responses:
 *          '200':
 *              description: A successful response
 */
routes.put('/customers', (req, res) => {
    res.send('Successful updated customers');
});

export default routes;
