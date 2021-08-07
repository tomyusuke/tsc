import { UserController } from '../controller/UserController';

const express = require('express');
const router = express.Router();
const repository = new UserController();

router.get('/', (req, res, next) => {
  console.log('GET user API');
  repository.all(req, res, next).then((item) => {
    res.status(200).send(item);
  });
});
router.get('/:id', (req, res, next) => {
  repository.one(req, res, next).then((item) => {
    res.status(200).send(item);
  });
});
router.post('/register', (req, res, next) => {
  repository.save(req, res, next).then((item) => {
    res.status(200).send(item);
  });
});
router.delete('/remove/:id', (req, res, next) => {
  console.log('DELETE user API');
  repository.remove(req, res, next).then(() => {
    res.status(200).end();
  });
});
router.put('/update/:id', (req, res, next) => {
  repository.save(req, res, next).then((item) => {
    res.status(200).send(item);
  });
});

module.exports = router;
