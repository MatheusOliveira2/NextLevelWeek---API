import express from "express"

import PointsController from "./controllers/pointsController"
import ItemsControlle from "./controllers/itemsController"
import ItemsController from "./controllers/itemsController"
import multer from "multer"
import multerConfig from "./config/multer"

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get("/items", itemsController.index)

routes.get("/points/:id", pointsController.show)
routes.get("/points", pointsController.index)

routes.post("/points", upload.single("image"), pointsController.create)

export default routes
