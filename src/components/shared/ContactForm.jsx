import React, { useState } from 'react'
import './style/ContactForm.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = ({ setContactFormClose }) => {

  const [reCaptchaStatus, setReCaptchaStatus] = useState(false)


  const form = useRef();


  const handleSendEmail = async (e) => {
    e.preventDefault();

    /* emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setContactFormClose(true)
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ); */
  };

  const handleCloseForm = () => {
    setContactFormClose(true)
  }

  function onChange() {
    console.log('Changed');
    setReCaptchaStatus(true)
  }

  return (
    <form ref={form} onSubmit={handleSendEmail} className='contactForm'>
      <span
        onClick={handleCloseForm}
        className='contactForm__x material-symbols-outlined'>
        cancel
      </span>

      <h2
        className='contactForm__h2'
        data-translate-en='Contact Form'
        data-translate-es='Formulario de Contacto'>
        Formulario de Contacto
      </h2>

      <label className='contactForm__label'>
        <span className='contactForm__field__name contactForm__field--required'
          data-translate-en='Name'
          data-translate-es='Nombre'>
          Nombre
        </span>
        <input name='name' className='contactForm__field' type='text' required />
      </label>

      <label className='contactForm__label'>
        <span className='contactForm__field__name contactForm__field--required'
          data-translate-en='Email'
          data-translate-es='Correo Electrónico'>
          Correo Electrónico
        </span>
        <input name='email' className='contactForm__field' type='email' required />
      </label>

      <label className='contactForm__label'>
        <span className='contactForm__field__name'
          data-translate-en='Phone'
          data-translate-es='Teléfono'>
          Teléfono
        </span>
        <input name='phone' className='contactForm__field' type='tel' />
      </label>

      <label className='contactForm__label'>
        <span className='contactForm__field__name contactForm__field--required'
          data-translate-en='Message'
          data-translate-es='Mensaje'>
          Mensaje
        </span>
        <textarea name='message' className='contactForm__textArea' id='message' required rows='5'></textarea>
      </label>

      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={onChange}
      />

      {reCaptchaStatus &&
        <button
          className='fcontactForm__btn'
          data-translate-en='Send'
          data-translate-es='Enviar'>
          Enviar
        </button>
      }

      <div className='contactForm__icon__container'>
        <a className='contactForm__a' href='tel:+573145872733'>
          <i className='contactForm__a__icon icon bx bx-phone'></i>
        </a>
        <a className='contactForm__a' href='https://wa.me/+573145872733' target='_blank'>
          <i className='contactForm__a__icon icon bx bxl-whatsapp'></i>
        </a>
        <a className='contactForm__a' href='https://www.linkedin.com/in/devferming/' target='_blank'>
          <i className='contactForm__a__icon icon bx bxl-linkedin'></i>
        </a>
        <a className='contactForm__a' href='https://github.com/devferming' target='_blank'>
          <i className='contactForm__a__icon icon bx bxl-github'></i>
        </a>
      </div>

    </form>
  )
}

export default ContactForm