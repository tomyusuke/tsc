import { UserController } from '../controller/UserController';
import * as express from 'express';

const router = express.Router();
const repository = new UserController();

router.get('/', async (req, res, next) => {
  console.log('GET user API');
  const item = await repository.all(req, res, next);
  res.status(200).send(item);
});
router.get('/:id', async (req, res, next) => {
  const item = await repository.one(req, res, next);
  res.status(200).send(item);
});
router.post('/register', async (req, res, next) => {
  const item = repository.save(req, res, next);
  res.status(200).send(item);
});
router.delete('/remove/:id', async (req, res, next) => {
  await repository.remove(req, res, next);
  res.status(200).end();
});
router.put('/update/:id', async (req, res, next) => {
  const item = await repository.save(req, res, next);
  res.status(200).send(item);
});

module.exports = router;
