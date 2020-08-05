import { Router } from "express";
import {
  createUserController,
  getUserController,
  updateUserController,
} from "./useCases/User";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.put("/users/:id", (request, response) => {
  return updateUserController.handle(request, response);
});

router.get("/users", (request, response) => {
  return getUserController.handle(request, response);
});

export { router };
