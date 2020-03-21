const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

// CORS setup
app.use(cors());

// Database connection
mongoose.connect('mongodb+srv://hayder:test1234@graphql-server-m3cms.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Database connected');
}).catch(err => {
  console.log('error:', err);
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});