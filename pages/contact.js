import React, { useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const router = useRouter()
  const handleClick = e => {
    e.preventDefault()
    router.push('/thankyou')
  }
  const form = useRef(null);

const handlesubmit = () => {
  form.current.reset(); //this will reset all the inputs in the form
}

  return (
    <div className={styles.container}>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4998065714287401"
     crossorigin="anonymous"></script>
        <title>Contact - Ansh's Blog</title>
        <meta name="description" content="My Personal Developer Blog." />
        <link
          rel="icon"
          href="https://anshkaushal.github.io/images/pic01.jpg"
        />
      </Head>
      <h1 className={styles.heading}>Contact Me</h1>
<form
  name="gform"
  id="gform"
  encType="text/plain"
  action="https://docs.google.com/forms/d/e/1FAIpQLSdi-0WWk_0oP3PZHdXS6AKqh09KhxDg37dPY_QlYTLtWcm6tg/formResponse?"
  target="hidden_iframe"
  onSubmit="submitted=true;"
>
  <div className={styles.mb3}>
    <div className={styles.mb3}>
      <label htmlFor="name" className={styles.formlabel}>Name :</label>
      <input className={styles.input} type="text" name="entry.2005620554" id="entry.2005620554" required />
    </div>
    <div className={styles.mb3}>
      <label htmlFor="email" className={styles.formlabel}>Email :</label>
      <input className={styles.input} type="text" name="entry.1045781291" id="entry.1045781291" required />
    </div>
    <div className={styles.mb3}>
      <label htmlFor="message" className={styles.formlabel}>Message :</label>
      <textarea className={styles.input} name="entry.839337160" id="entry.839337160" rows={5} required></textarea>
    </div>
  </div>
  <ul className={styles.actions}>
    <li><input type="submit" onClick={handleClick} value="Send Message" className={styles.btn} /></li>
    <li><input type="reset" onSubmit={handlesubmit} value="Reset" className={styles.btn} /></li>
  </ul>
</form>
<iframe
  name="hidden_iframe"
  id="hidden_iframe"
  style={{display: 'none'}}
  onLoad="if(submitted) {}"
></iframe>

    </div>
  );
};

export default Contact;
