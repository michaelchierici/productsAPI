const typeORMConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "468146",
  database: "pokedexdb",

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
