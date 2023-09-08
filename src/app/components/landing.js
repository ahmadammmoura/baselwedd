"use client";
import React, { useState } from 'react';
import styles from '../style/LetterForm.module.css';

const LetterForm = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <div className={`${styles.wrapper} ${styles.centered} ${submitted ? styles.sent : ''}`}>
        <article className={styles.letter}>
          <div className={`${styles.side}`}>
            <h1 className={styles.h1}>wish us luck</h1>
            <p>
              <textarea
                className={styles.textarea}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </p>
          </div>
          <div className={`${styles.side}`}>
            <p>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </p>
            <p>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </p>
            <p>
              <button id="sendLetter" onClick={handleSubmit} className={styles.button}>
                Send
              </button>
            </p>
          </div>
        </article>
        <div className={`${styles.envelope} ${styles.front}`}></div>
        <div className={`${styles.envelope} ${styles.back}`}></div>
      </div>
      {submitted && (
        <p className={`${styles['result-message']} ${styles.centered}`}>Thank you for your message</p>
      )}
    </>
  );
};

export default LetterForm;
