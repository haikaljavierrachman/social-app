import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const signupRouters = express.Router();

signupRouters.post(
  '/api/auth/signup',
  [
    body('email').isEmail().withMessage('Email must be a valid format'),
    body('password')
      .trim()
      .isLength({ min: 8, max: 32 })
      .withMessage('Password must be between 8 and 32 characters'),
    body('password')
      .contains(/^(.*[a-z].*)$/)
      .withMessage('Password must contain at least one lower case letter'),
    body('password')
      .contains(/^(.*[A-Z].*)$/)
      .withMessage('Password must contain at least one upper case letter'),
    body('password')
      .contains(/^(.*\d.*)$/)
      .withMessage('Password must contain at least one upper case letter'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).send({ errors });
    }

    res.send({});
  }
);

export default signupRouters;
