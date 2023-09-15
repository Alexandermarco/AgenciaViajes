import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

const db = new Sequelize(process.env.DB_NAME, process.env.DB_PARAM1, process.env.DB_PARAM2, {
    dialect: 'mssql',
    define: {
      timestamps: false
    },
    dialectOptions: {
      authentication: {
        type: 'default',
        options: {
          domain: process.env.DB_DOMAIN,
          userName: process.env.DB_USER,
          password: process.env.DB_PASS
        }
      },
      options: {
        instanceName: process.env.DB_INSTANCE
      }
    }
});

export default db;
