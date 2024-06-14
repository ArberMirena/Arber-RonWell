import { Request, Response } from 'express';
import productService from '../services/productService';
import { getErrorMessage } from '../utils/errorHandler';
import Product from '../models/product';

class ProductController {

  async createProduct(req: Request, res: Response) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: getErrorMessage(error) });
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const product = await productService.getProductById(Number(req.params.id));
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: getErrorMessage(error) });
    }
  }

  async getProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: getErrorMessage(error) });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const product = await productService.updateProduct(Number(req.params.id), req.body);
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: getErrorMessage(error) });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      await productService.deleteProduct(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: getErrorMessage(error) });
    }
  }
}

export default new ProductController();

//For swagger purposes 
export const productSwaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Product API',
    version: '1.0.0',
    description: 'API for managing products'
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Local server'
    }
  ],
  components: {
    schemas: {
      ProductRequest: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          price: { type: 'number' },
          description: { type: 'string' }
        },
        required: ['name', 'price']
      }
    }
  },
  paths: {
    "/products": {
      post: {
        summary: "Create a new product",
        description: "Create a new product",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: '#/components/schemas/ProductRequest'
              }
            }
          }
        },
        responses: {
          '201': {
            description: 'Product created successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object'
                }
              }
            }
          },
          '400': {
            description: 'Bad request'
          }
        }
      },
      get: {
        summary: "Get all products",
        description: "Get all products",
        responses: {
          '200': {
            description: 'List of products',
            content: {
              'application/json': {
                schema: {
                  type: 'array'
                }
              }
            }
          },
          '400': {
            description: 'Bad request'
          }
        }
      }
    },
    "/products/{id}": {
      get: {
        summary: "Get a product by ID",
        description: "Get a product by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            description: "Product ID",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          '200': {
            description: 'Product found',
            content: {
              'application/json': {
                schema: {
                  type: 'object'
                }
              }
            }
          },
          '404': {
            description: 'Product not found'
          },
          '400': {
            description: 'Bad request'
          }
        }
      },
      put: {
        summary: "Update a product by ID",
        description: "Update a product by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            description: "Product ID",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Updated product name"
                  },
                  description: {
                    type: "string",
                    description: "Updated product description"
                  },
                  price: {
                    type: "number",
                    format: "float",
                    description: "Updated product price"
                  },
                },
                example: {
                  name: "Updated Product",
                  description: "This is an updated product description",
                  price: 89.99
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Product updated successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                      description: 'Product ID'
                    },
                    name: {
                      type: 'string',
                      description: 'Product name'
                    },
                    description: {
                      type: 'string',
                      description: 'Product description'
                    },
                    price: {
                      type: 'number',
                      format: 'float',
                      description: 'Product price'
                    },
                    stock: {
                      type: 'integer',
                      description: 'Product stock quantity'
                    }
                  }
                }
              }
            }
          },
          '400': {
            description: 'Bad request'
          }
        }
      },
      delete: {
        summary: "Delete a product by ID",
        description: "Delete a product by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            description: "Product ID",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          '204': {
            description: 'Product deleted successfully'
          },
          '400': {
            description: 'Bad request'
          }
        }
      }
    }
  }
};
