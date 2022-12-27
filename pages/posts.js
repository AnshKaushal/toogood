import React, { useState } from "react";
import Head from "next/head";
import * as fs from "fs";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import InfiniteScroll from 'react-infinite-scroll-component';

const Posts = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch('http://localhost:3000/api/blogs/?count=$(count + 2)')
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  };

  return (
    <div>
      <div className={styles.container}>
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4998065714287401"
     crossorigin="anonymous"></script>
          <title>Posts - Ansh's Blog</title>
          <meta name="description" content="My Personal Developer Blog." />
          <link
            rel="icon"
            href="https://anshkaushal.github.io/images/pic01.jpg"
          />
        </Head>

        <main className={styles.main}>
        <h1 className={styles.title}>Latest Posts</h1>
        <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
          

          {blogs.map((blogitem) => {
            return (
              <div key={blogitem.slug} className={styles.grid}>
                <img className={styles.postImg} src="./bg.jpg" alt="Anshh" width={40} height={40} />
                <p className={styles.imgPara}>BlogItBruh<br /> <Link href="https://instagram.com/anshhkaushal" target={"_blank"}>@AnshKaushal</Link></p>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                </Link>
                <p className={styles.blogItemPara}>
                  {blogitem.metadesc.substr(0, 40)}...
                </p>
              </div>
            );
          })}
          </InfiniteScroll>
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
