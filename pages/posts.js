import React, { useState } from "react";
import Head from "next/head";
import * as fs from "fs";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Posts = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Posts - Ansh's Blog</title>
          <meta name="description" content="My Personal Developer Blog." />
          <link
            rel="icon"
            href="https://anshkaushal.github.io/images/favicon.png"
          />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Latest Posts</h1>

          {blogs.map((blogitem) => {
            return (
              <div key={blogitem.slug} className={styles.grid}>
                <img className={styles.postImg} src="/bg.jpg" alt="Anshh"/>
                <p className={styles.imgPara}>BlogItBruh<br /> <a href="https://instagram.com/anshhkaushal" target={"_blank"}>@AnshKaushal</a></p>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                </Link>
                <p className={styles.blogItemPara}>
                  {blogitem.metadesc.substr(0, 40)}...
                </p>
              </div>
            );
          })}
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/AnshKaushal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made By Ansh Kaushal&#8482; <br />
          &#169; Anshhh 2022
        </a>
      </footer>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("./blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs },
  };
}

export default Posts;
