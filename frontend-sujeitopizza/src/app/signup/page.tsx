
import Image from "next/image"
import Link from "next/link"
import logoImg from '/public/logo.svg'
import styles from '../page.module.scss'
import { api } from '@/services/api'
import { redirect } from "next/navigation"

export default function Signup() {

  async function handleRegister(formData: FormData) {
    "use server"

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (name === "" || email === "" || password === "") {
      console.log("PREENCHA TODOS OS CAMPOS")
      return;
    }

    try {

      await api.post("/users", {
        name,
        email,
        password
      })
      
    } catch (err) {
      console.log("error")
      console.log(err)
    }

    redirect("/")
    
  }

    return (
        <>
      <main className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />
        <section className={styles.login}>
        <h1>Criando sua conta</h1>            
            <form action={handleRegister}>
              <input
              type="text"
              name="name"
              required
              placeholder="Digite seu nome..."
              className={styles.input}
            />
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
            <button type="submit">Cadastrar</button>
          </form>
          <Link className={styles.text} href="/">Não Possuí uma conta? Faça o login</Link>
        </section>
      </main>
        </>
    )
}