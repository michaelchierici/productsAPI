import { Router } from "express";
import { ProductController } from "../../controller/ProductController";

const productRouter = Router();

productRouter.post("/", ProductController.create);

productRouter.get("/", ProductController.findAll);

productRouter.get("/:id", ProductController.findById);

productRouter.patch("/:id", ProductController.update);

productRouter.delete("/:id", ProductController.delete);

export { productRouter };
