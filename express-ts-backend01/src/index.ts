import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { router as userRouter } from './router/userAccountRouter';
import { todoRouter } from './router/todoRouter';

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
      next();
    });
    // register express routes from defined application routes
    //const user = require('./router/userRouter');
    app.use('/user', userRouter);
    app.use('/todo', todoRouter);

    // setup express app here
    // ...

    // start express server
    app.listen(3001);

    console.log(
      'Express server has started on port 3000. Open http://localhost:3000/user/ to see results'
    );
  })
  .catch((error) => console.log(error));
