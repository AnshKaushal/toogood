import React, { useState } from 'react'
import * as Axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Contact.module.css'

const Compose = () => {
    const url = `http://localhost:3000/api/postcompose`
    const [data,setData] = useState({
        title: "",
        metadesc: "",
        content: "",
        slug: ""
    })
    
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            title: data.title,
            metadesc: data.metadesc,
            content: data.content,
            slug: data.slug,
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
  return (
    <div>
      <div className={styles.container}>
     <Head>
        <title>Create new post - Ansh's Blog</title>
        <meta name="description" content="My Personal Developer Blog." />
        <link
          rel="icon"
          href="https://anshkaushal.codes/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-bg-3000.ddf4cdb5.jpg&w=1080&q=75"
        />
      </Head>
      <h1 className={styles.heading}>New Post</h1>
      <form onSubmit={(e)=>submit(e)}>
        <div className={styles.mb3}>
          <label htmlFor="title" className={styles.formlabel}>
            Title :
          </label>
          <input
            type="text"
            className={styles.input}
            value={data.title}
            onChange={(e)=>handle(e)}
            placeholder="Title..."
            id="title"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="metadesc" className={styles.formlabel}>
            Description :
          </label>
          <input
            className={styles.input}
            type="text"
            value={data.metadesc}
            onChange={(e)=>handle(e)}
            placeholder="Description..."
            id="metadesc"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="content" className={styles.formlabel}>
            Content :
          </label>
          <textarea
            className={styles.input}
            placeholder="Content..."
            value={data.content}
            onChange={(e)=>handle(e)}
            id="content"
            rows="5"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="slug" className={styles.formlabel}>
            Slug :
          </label>
          <input
            className={styles.input}
            type="text"
            value={data.slug}
            onChange={(e)=>handle(e)}
            placeholder="Slug..."
            id="slug"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
      </div>
    </div>
  )
}

export default Compose