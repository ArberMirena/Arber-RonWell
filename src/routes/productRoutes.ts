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
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Name of the product"
                  },
                  description: {
                    type: "string",
                    description: "Description of the product"
                  },
                  price: {
                    type: "number",
                    format: "float",
                    description: "Price of the product"
                  },
                  stock: {
                    type: "integer",
                    description: "Stock quantity"
                  }
                },
                required: ["name", "price", "stock"], // Required fields for creating a product
                example: {
                  name: "Sample Product",
                  description: "This is a sample product",
                  price: 99.99,
                  stock: 100
                }
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
      get: {
        summary: "Get all products",
        description: "Get all products",
        responses: {
          '200': {
            description: 'List of products',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
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
                  stock: {
                    type: "integer",
                    description: "Updated stock quantity"
                  }
                },
                example: {
                  name: "Updated Product",
                  description: "This is an updated product description",
                  price: 89.99,
                  stock: 150
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
