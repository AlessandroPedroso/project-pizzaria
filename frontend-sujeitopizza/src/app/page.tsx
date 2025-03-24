import styles from "./page.module.scss";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";
import {cookies} from 'next/headers'
export default function Page() {

  async function handleLogin(formData:FormData) {
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    if (email === "" || password === "") {
      return;
    }

    try {

      const response = await api.post("/session", {
        email,
        password
      })

      if (!response.data.token) {
        return;
      }

      const expressTime = 60 * 60 * 24 * 30 * 1000;
      const cookieStore = await cookies();

      cookieStore.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure:process.env.NODE_ENV === "production"
      })

      // console.log(response)

    } catch (err) {
      console.log(err);
      return;
    }

    redirect("/dashboard")
  }

  return (
    <>
      <main className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />
        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              name="email"
              required
              placeholder="Digite seu email..."
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="***********"
              className={styles.input}
            />
            <button type="submit">Acessar</button>
          </form>
          <Link className={styles.text} href="/signup">Não Possuí uma conta? Cadastra-se</Link>
        </section>
      </main>
    </>
  );
}
