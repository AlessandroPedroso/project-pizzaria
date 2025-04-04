import { Request, Response } from "express";

import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrdersController {
  async handle(req: Request, res: Response) {
    const listOderdersService = new ListOrderService();

    const orders = await listOderdersService.execute();

    return res.json(orders);
  }
}

export { ListOrdersController };
