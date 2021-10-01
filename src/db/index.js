import { Sequelize } from "sequelize";

const { PGPORT, PGHOST, PGPASSWORD, PGUSER, PGDATABASE } = process.env;

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    port: process.env.PGPORT,
    host: process.env.PGHOST,
    dialect: "postgres",
    dialectOptions: {         // IMPORTANT
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

const testDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB is authenticated");
    } catch (error) {
        console.log(error);
    }
};

export const connectDB = async () => {
    try {
        await sequelize.sync();
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};

export default sequelize;