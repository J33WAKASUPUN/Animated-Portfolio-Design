import React, { useRef, useState } from 'react'
import "../Contacts/contacts.scss"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';


const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const Contacts = () => {

  const formRef = useRef();
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_393ewd9', 'template_rw7tbrm', formRef.current, {
        publicKey: 'J81FZuXzZ9RyJs4E_',
      })
      .then(
        () => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
        },
      );
  };

  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
      <div className="content-wrapper">
        <motion.div className='textContainer' variants={variants}>
          <motion.h1 variants={variants}>Let's Work Together</motion.h1>
          <motion.div className='item' variants={variants}>
            <h2>Mail</h2>
            <span>hello@gmail.com</span>
          </motion.div>
          <motion.div className='item' variants={variants}>
            <h2>Address</h2>
            <span>Kandy, Sri Lanka</span>
          </motion.div>
          <motion.div className='item' variants={variants}>
            <h2>Phone</h2>
            <span>+ 123 456 788</span>
          </motion.div>
        </motion.div>
        <motion.div className='formContainer' variants={variants}>
          <form onSubmit={sendEmail} ref={formRef}>
            <input type="text" required placeholder='Name'  name='name'/>
            <input type="email" required placeholder='Email' name='email'/>
            <textarea rows={8} placeholder='Message' name='message'></textarea>
            <button>Submit</button>

            {error && "Error"}
            {success && "Success"}

          </form>
        </motion.div>
      </div>
      <motion.div className="copyright" variants={variants}>
        <hr />            
        <p>Copyright <span>&copy;</span> 2024 | Design By: Jeewaka Supun</p>
      </motion.div>
    </motion.div>
  )
}

export default Contacts