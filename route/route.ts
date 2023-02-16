import { Router } from "express";

import {
  postTask,
  getAlltasks,
  getOnetask,
  updateTask,
  deteleTask,
} from "../controller/logic";

const router = Router();

router.route("/newTask").post(postTask);
router.route("/getTasks").get(getAlltasks);
router.route("/oneTask/:id").get(getOnetask);
router.route("/update/:id").patch(updateTask);
router.route("/delete/:id").delete(deteleTask);

export default router;
