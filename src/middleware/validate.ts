import { AnyZodObject } from "zod";
import e, { Request, Response, NextFunction } from "express";
import { createCipher } from "crypto";
//Middleware, checks incoming requests vs a schema
//

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validate;
