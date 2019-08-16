//In knex, foreign key restrictions don’t automatically work. Whenever using foreign keys in your schema, add the following code to your knexfile. This will prevent users from entering bad data into a foreign key column.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: "./data/recipes.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    // sqlite will not enforce Foreign Keys by default
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // turns on the FK enforcement
      }
    }
  }
};
