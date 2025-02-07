import styles from "./page.module.scss";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className={styles.containerCenter}>
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
          <Link href="/signup">Não possui uma conta? Cadastra-se</Link>
        </section>
      </div>
    </>
  );
}
