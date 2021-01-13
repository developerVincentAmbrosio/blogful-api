const knex = require('knex')
const app = require('./app')
const { PORT } = require('./config')
const db = knex({
  client: 'pg',
  conneciton: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'blogful'
  }
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})