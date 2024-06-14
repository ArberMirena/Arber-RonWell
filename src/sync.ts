import sequelize from './config/database';
import Product from './models/product';

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: true }); // Use 'force: true' to drop and recreate tables
    console.log('All models were synchronized successfully.');

    // Optionally, create some initial data
    await Product.create({
      name: 'Sample Product',
      price: 19.99,
      description: 'This is a sample product',
    });

    console.log('Initial data has been inserted.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
