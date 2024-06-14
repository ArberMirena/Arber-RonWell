**Description**

This is a step by step guide how to setup project.

Prerequisites
Before you begin, ensure you have met the following requirements:

`Node.js installed `  \
`PostgreSQL installed and running`  \
`npm or yarn package manager installed`  \

**Installation**  \
Follow these steps to get your development environment set up:


1. Clone the repository \
   ` git clone https://github.com/ArberMirena/Arber-RonWell.git`
3. Install dependencies  \
    `npm install`

5. `Create a PostgreSQL database named ronwell.`

6. At `src/config/database.ts` you should add the needed configurtion for database

**Example:**  

`const sequelize = new Sequelize('ronwell', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});`


**DATABSE INFO**  \
`ronwell - database name` \
`postgres - username`, \
`admin - password` \
`localhost - the host of database`

5. Open terminal at project base folder and run the following command to migrate the database and initializate it.
`npx ts-node sync.ts`

6. Run the following command to create the files for the server and compile the type script
npx tsc

7. To start the server run the following command
node dist/server.js  


___

**Product API Documentation**
___


**Base URL**  \
`http://localhost:4000`

**Swagger UI**  \
`http://localhost:4000/api-docs/`
___

**POST /products**  \
`Creates a new product.`

`Request Body:
name (string, required): The name of the product.
price (number, required): The price of the product.
description (string, optional): Description of the product.`

___
**GET /products**  \
`Retrieves all products.`

___
**GET /products/{id}**  \
`Retrieves a specific product by ID.`

Parameters:  \
`id (number, path, required): ID of the product.`

___
**PUT /products/{id}**  \
`Updates a specific product by ID.`

Parameters:  \
`id (number, path, required): ID of the product to update.
Request Body:
name (string, optional): New name of the product.
price (number, optional): New price of the product.
description (string, optional): New description of the product.`

___

**DELETE /products/{id}**  \
`Deletes a specific product by ID.`

Parameters:
`id (number, path, required): ID of the product to delete.`  

___

**The ORM (Sequelize)**

The functions that orm offers are used in productService.ts  \

`Product.create()` - adds the ability to create new entry \
`Product.findByPk()` - adds the ability to find by primary key  \
`Product.findAll()` - adds the ability to fetch all data \
`Product.update()` - adds the ability to update entry \
`Product.destroy()` - adds the ability to delete entry 

___

**Why Sequelize**

`Sequelize ORM simplifies database interactions in the context of an e-commerce application by offering an intuitive, object-oriented approach to managing database operations, ensuring data integrity, and supporting multiple database platforms seamlessly. These features collectively reduce development time, improve maintainability, and enhance the overall robustness of the application's database layer`


