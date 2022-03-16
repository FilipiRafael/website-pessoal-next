import Head from "../src/infra/components/Head"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head title="Filipi Rafael" favicon="avatar.png" />
      
      <main className={styles.main}>
        
      <Image className={styles.avatar} src={"/avatar.png"} width="200px" height="200px" alt="Avatar" />  

      <h1 className={styles.title}>Filipi Rafael</h1>

        <p className={styles.description}>
          Desenvolvedor de Software apaixonado por aplicar minhas habilidades
          para resolver problemas, criar produtos incríveis e impactar vidas.
        </p>

        <div className={styles.grid}>
          <Link href={props.github} >
          <a target="_blank" className={styles.card}>
            <h2>GitHub</h2>
            <p>Conheça todos os meus projetos públicos.</p>
          </a>
          </Link>

          <Link href={props.linkedin}>
          <a target="_blank" className={styles.card}>
            <h2>Linkedin</h2>
            <p>Conheça minha trajetória profissional.</p>
          </a>
          </Link>

          <Link href={props.medium}>
          <a target="_blank"
            className={styles.card}
          >
            <h2>Medium</h2>
            <p>Veja os artigos que publiquei sobre diversos assuntos.</p>
          </a>
          </Link>

          <Link href={props.twitter}>
          <a target="_blank"
            className={styles.card}
          >
            <h2>Twitter</h2>
            <p>
              Acompanhe minhas publicações sobre tecnologia.
            </p>
          </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        Filipi Rafael • Todos os direitos reservados
      </footer>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      github: "https://github.com/FilipiRafael",
      linkedin:"https://www.linkedin.com/in/filipi-rafael-developer/",
      medium: "https://medium.com/@filipirafael.123",
      twitter: "https://twitter.com/FilipiRafael3"
    }
  }
}