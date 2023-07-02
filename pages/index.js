import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ansh's Blog</title>
        <meta name="description" content="My Personal Developer Blog." />
        <link rel="icon" href="https://anshkaushal.codes/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-bg-3000.ddf4cdb5.jpg&w=1080&q=75" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          &lt;Blog By <a href="https://github.com/AnshKaushal">Ansh</a>/&gt;&#8482;
        </h1>
        <p>Your Fav Dev Blog</p>
        <p>Made entirely with Nextjs & Basic web technologies</p>

        <img className={styles.myImg} src="/homeimg.avif" width={237} height={158} alt="coder"/>

        <p className={styles.description}>
          Read My Featured Posts!
        </p> 

        <div className={styles.grid}>
          
          <Link href="/blogpost/why-i-started-blogging">
            <h2>🔱 Why I Started Blogging &rarr;</h2>
          </Link>

          <Link href="/blogpost/first-post">
            <h2>🔱 First Post &rarr;</h2>
          </Link>

          <Link href="/blogpost/basics-of-programming">
            <h2>🔱 Basics Of Programming &rarr;</h2>
          </Link>

          <Link href="/blogpost/what-i-learned-and-understood">
            <h2>🔱 What I Learned And Understood &rarr;</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/AnshKaushal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made By Ansh Kaushal&#8482; <br/> 
          &#169; Anshhh 2022
        </a>
      </footer>
    </div>
  )
}
