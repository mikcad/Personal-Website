import { ChangeEvent, useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState(false);
  const form: any = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_23fx4ic', 'template_s0y37ga', form.current, {
        publicKey: 'Hj0yDd_x-FXFiMf_E',
      })
      .then(
        () => {
          console.log('SUCCESS! Email has been sent!');
          setFormState(true);
          setFormData({
            user_name: '',
            user_email: '',
            user_message: '',
          });
        },
        (error) => {
          console.log('FAILED! Email failed to send!', error.text);
        }
      );
  };

  return (
    <section id="contact-section">
      <div className="wrapper">
        <div className="">
          <h2 className="sub-title">Contact</h2>
          <h1>Get in Touch</h1>
        </div>
        <div className="content-container">
          <div className="form-container">
            <p>
              Drop me a message to have a chat, ask about my resume or see if we
              can make some magic!? I'd love to hear from you!
            </p>
            <p>
              It's as simple as filling out your details in the form below. I
              look forward to hearing from you!
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  placeholder="Roronoa Zoro"
                  required
                />
                <label htmlFor="name">
                  Name<span className="required">*</span>
                </label>
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="strongestswordsman02@onepiece.com"
                  required
                />
                <label htmlFor="email">
                  Email<span className="required">*</span>
                </label>
              </div>
              <div>
                <input
                  id="message"
                  type="textbox"
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleInputChange}
                  placeholder="Dear Michael, I seem to have lost my way! Can you help me??"
                  required
                />
                <label htmlFor="message">
                  Message<span className="required">*</span>
                </label>
              </div>
              <input id="send" type="submit" value="Send Email" />
            </form>
          </div>
          {/* <div className="social-container">here are my socials</div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
