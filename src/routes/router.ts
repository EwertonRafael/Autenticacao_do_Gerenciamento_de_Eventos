import express from "express";
import { validationUserFields } from "../middlewares/validation";
import { createUser } from "../controllers/user";
const router = express.Router();

const user = new createUser();

router.post('/register', validationUserFields, user.handle)

export = router;