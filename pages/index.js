import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filipi Rafael</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/avatar.png" />
        <link rel="icon" href="/avatar.png" />
      </Head>
      
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
            <p>Conheça os meus melhores projetos no github.</p>
          </a>
          </Link>

          <Link href={props.linkedin}>
          <a target="_blank" className={styles.card}>
            <h2>Linkedin</h2>
            <p>Conheça minha trajetória e vamos conversar.</p>
          </a>
          </Link>

          <Link href={props.instagram}>
          <a target="_blank"
            className={styles.card}
          >
            <h2>Instagram</h2>
            <p>Para acompanhar meu dia a dia.</p>
          </a>
          </Link>

          <Link href={props.twitter}>
          <a target="_blank"
            className={styles.card}
          >
            <h2>Twitter</h2>
            <p>
              Para acompanhar novidades sobre profissão/tecnologia.
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
      instagram: "https://www.instagram.com/filipi.rafael.7/",
      twitter: "https://twitter.com/FilipiRafael3"
    }
  }
}