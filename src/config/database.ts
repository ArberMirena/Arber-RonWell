import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ronwell', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
