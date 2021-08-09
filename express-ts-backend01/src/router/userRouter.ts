import { UserController } from '../controller/UserController';
import * as express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const repository = new UserController();
  console.log('GET user API');
  const item = await repository.all(req, res, next);
  res.status(200).send(item);
});
router.get('/:id', async (req, res, next) => {
  const repository = new UserController();
  const item = await repository.one(req, res, next);
  res.status(200).send(item);
});
router.post('/register', async (req, res, next) => {
  const repository = new UserController();
  const item = repository.save(req, res, next);
  res.status(200).send(item);
});
router.delete('/remove/:id', async (req, res, next) => {
  const repository = new UserController();
  await repository.remove(req, res, next);
  res.status(200).end();
});
router.put('/update/:id', async (req, res, next) => {
  const repository = new UserController();
  const item = await repository.save(req, res, next);
  res.status(200).send(item);
});

export { router };
