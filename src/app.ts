import express, { Express, Request, Response } from 'express';
import productController, { productSwaggerSpec } from './controllers/productController';
import setupSwagger from './swagger';

const app: Express = express();

app.use(express.json());

app.post('/products', (req: Request, res: Response) => productController.createProduct(req, res));
app.get('/products/:id', (req: Request, res: Response) => productController.getProduct(req, res));
app.get('/products', (req: Request, res: Response) => productController.getProducts(req, res));
app.put('/products/:id', (req: Request, res: Response) => productController.updateProduct(req, res));
app.delete('/products/:id', (req: Request, res: Response) => productController.deleteProduct(req, res));

setupSwagger(app, productSwaggerSpec);

const PORT: number = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
