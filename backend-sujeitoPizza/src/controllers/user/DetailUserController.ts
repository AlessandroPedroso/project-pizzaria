import type { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    // console.log("ID DO USER: ", user_id);

    const detailUserService = new DetailUserService();
    const user = await detailUserService.execute();

    res.json(user);
  }
}

export { DetailUserController };