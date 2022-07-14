import { Request, Response, Router } from "express";

const trainerRouter = Router();

trainerRouter.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({});
});

export { trainerRouter };
