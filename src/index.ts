import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const port = process.env.PORT || 3333

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () =>
  console.log('Server running on ' + port)
);