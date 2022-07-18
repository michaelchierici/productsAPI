const path = require("path");

require("dotenv").config({
  path: path.resolve("enviroments", (process.env.NODE_ENV = ".env")),
});

const typeORMConnectionOptions = {
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,

  logging: ["error", "schema", "warn"],

  entities: [`src/entity/*.[jt]s`],
  synchronize: true,
  migrations: [`src/database/migrations/*/.[jt]s`],
  seeds: [`src/database/seeds/*/{.ts,.js}`],
  //   subscribers: [`/subscriber/*/.[jt]s`],

  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/database/migrations",
    subscribersDir: "src/subscriber",
  },
};

module.exports = typeORMConnectionOptions;
