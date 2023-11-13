import express from "express";
import { validationLoginFields, validationUserFields } from "../middlewares/validation";
import { LoginUser, createUser } from "../controllers/user";
import { auth } from "../auth/authorization";
const router = express.Router();

const user = new createUser();
const login = new LoginUser();

router.post('/register', validationUserFields, user.handle)
router.post('/login', validationLoginFields, login.handle)

router.use(auth)


export = router;