module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/squad_goals',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/squad_goals_test',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
