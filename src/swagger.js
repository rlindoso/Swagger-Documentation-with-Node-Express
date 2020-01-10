import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

class Swagger {
    constructor(){
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
            apis: ["./src/swagger.js"]
        };

        this.swaggerDocs = swaggerJsDoc(swaggerOptions);        
    } 

    setRoutes(routes){
        routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(this.swaggerDocs));
    }
};

/**
 * @swagger
 * /customers:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          '200':
 *              description: A successful response
 */

 /**
 * @swagger
 * /customers:
 *  put:
 *      description: Use to update all customers
 *      responses:
 *          '200':
 *              description: A successful response
 */

export default new Swagger();
