import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/BlogPost.module.css";

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
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
          <br />
          {blog && (
            <div
              className={styles.blogPara}
              dangerouslySetInnerHTML={createMarkup(blog.content)}
            ></div>
          )}
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

export async function getServerSideProps(context) {
    const { slug } = context.query;

    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let myBlog = await data.json();
    return {
      props: { myBlog }, // will be passed to the page component as props
    };
}

export default Slug;
