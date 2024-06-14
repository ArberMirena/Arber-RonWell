import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

function setupSwagger(app: Express, swaggerSpec: any) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;
