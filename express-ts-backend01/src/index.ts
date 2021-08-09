import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { User } from './entity/User';
import { UserController } from './controller/UserController';

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    const user = require('./router/userRouter');
    app.use('/user', user);

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    await connection.manager.save(
      connection.manager.create(User, {
        firstName: 'Timber',
        lastName: 'Saw',
        age: 27,
      })
    );
    await connection.manager.save(
      connection.manager.create(User, {
        firstName: 'Phantom',
        lastName: 'Assassin',
        age: 24,
      })
    );

    console.log(
      'Express server has started on port 3000. Open http://localhost:3000/user/ to see results'
    );
  })
  .catch((error) => console.log(error));
