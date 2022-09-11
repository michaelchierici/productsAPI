import { Router } from "express";
import { listRouter } from "./listRouter";
import { productRouter } from "./productRouter";

const PrivateRoutes = Router();

PrivateRoutes.use("/products", productRouter);
PrivateRoutes.use("/list", listRouter);

export { PrivateRoutes };
