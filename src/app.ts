import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { router } from '@/routes';

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error' });
    }

    return response.status(500).json(error);
  }
);

export { app };
