import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body as {
      order_id: string;
      product_id: string;
      amount: number;
    };

    const addIntemController = new AddItemService();
    const item = await addIntemController.execute({
      order_id,
      product_id,
      amount,
    });

    return res.json(item);
  }
}

export { AddItemController };
