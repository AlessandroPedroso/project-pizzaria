import { type Request, type Response, Router } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

router.get("/teste", (req: Request, res: Response) => {
	// throw new Error("Erro ao fazer essa requisição");
	res.json({ nome: "Sujeito Pizza" });
	return;
});

export { router };
