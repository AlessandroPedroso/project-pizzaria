import { compare } from "bcryptjs";
import prismaClient from "../../prisma";

interface AuthRequest {
	email: string;
	password: string;
}

class AuthUserService {
	async execute({ email, password }: AuthRequest) {
		//verificr se o email existe
		const user = await prismaClient.user.findFirst({
			where: {
				email: email,
			},
		});

		if (!user) {
			throw new Error("User/password incorrect");
		}

		//preciso verificar se a senha está correto
		const passwordMacth = await compare(password, user.password);

		if (!passwordMacth) throw new Error("User/password incorrect");

		//gerar um token JWT e devolver os dados do usuario como id, name e email

		return { ok: true };
	}
}

export { AuthUserService };
