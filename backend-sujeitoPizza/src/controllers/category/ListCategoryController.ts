import { Response, Request } from "express";
import { ListCategoryServices } from "../../services/category/ListCategoryServices";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryServices = new ListCategoryServices();

    const listCategory = await listCategoryServices.execute();

    res.json(listCategory);
  }
}

export { ListCategoryController };
