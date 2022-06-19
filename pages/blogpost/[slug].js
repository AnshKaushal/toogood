import React, { useEffect, useState } from "react";
import * as fs from 'fs';
import Head from "next/head";
import styles from "../../styles/BlogPost.module.css";

const Slug = (props) => {
  function createMarkup(c){
    return {__html : c} 
  }

  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div>
      <Head>
        <title>{blog && blog.title} - Ansh's blog</title>
        <meta name="description" content="My Personal Developer Blog." />
        <link
          rel="icon"
          href="https://anshkaushal.github.io/images/favicon.png"
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>{blog && blog.title}</h1>
          <hr />
          {blog && <div className={styles.blogPara} dangerouslySetInnerHTML = {createMarkup(blog.content)}></div>}
        </main>
      </div>
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
  );
};

export async function getStaticPaths(){
  return {
    paths: [
      { params : {slug : 'why-i-started-blogging'}},
      { params : {slug : 'basics-of-programming'}},
      { params : {slug : 'first-post'}},
      { params : {slug : 'what-i-learned-and-understood'}},
    ],
    fallback : true
    }
  }

export async function getStaticProps(context) { 
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`./blogdata/${slug}.json`,'utf-8')
  return {
    props: { myBlog: JSON.parse(myBlog) },
  }
}

export default Slug;
