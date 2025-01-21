import prismaClient from "../../prisma";
import { primeiroNomePadronizado } from "../../utils";
interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "") {
      throw new Error("Name invalid");
    }

    const nameDefault = primeiroNomePadronizado(name);

    //verifica se o cadastro já existe no banco de dados
    const filterCategory = await prismaClient.category.findFirst({
      where: {
        name: nameDefault,
      },
    });

    if (filterCategory) {
      throw new Error("Categoria já existe");
    }

    const category = await prismaClient.category.create({
      data: {
        name: nameDefault,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
