import { Request, Response, Router } from "express";

const pokemonRouter = Router();

pokemonRouter.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  res.json({});
});

export { pokemonRouter };
