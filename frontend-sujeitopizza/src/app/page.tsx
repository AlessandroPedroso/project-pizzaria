import styles from "./page.module.scss";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <main className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />
        <section className={styles.login}>
          <form>
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
