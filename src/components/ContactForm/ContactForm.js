import React, { useState } from 'react';
import validator from 'validator';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [state, setState] = useState({
        sent: false,
        sending: false,
        responseMsg: '',
    })

    const { register, handleSubmit, errors } = useForm();

    const { sent, sending, responseMsg } = state;

    const onSubmit = async data => {
        console.log(data);
        // set state to sending: true
        setState(state => {
            return {
                ...state,
                sending: true
            }
        })

        // send data to form handler

        // if sent and no error: set state to sent: true, sending: false, responseMsg: 'Email sent'
        setState(state => {
            return {
                ...state,
                sent: true,
                sending: false,
                responseMsg: 'Your message was sent. Thank you'
            }
        })

    }

    return (
        <div className={styles.ContactFormContainer}>
            <h2>Leave your message</h2>
            <div className={`${styles.DeliveryMsg}`} style={{ display: `${sent ? 'block' : 'none'}` }}>
                {sending && <p>Sending...</p>}
                <p>{responseMsg}</p>
            </div>
            <form className={styles.ContactForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.FormGroupTwo}>
                    {/** Name */}
                    <div className={styles.FormGroupItem}>
                        <input type="text" name="name" placeholder="Enter your name" className={`${errors?.message ? styles.Error : styles.NoError}`}
                            ref={register({
                                required: { value: true, message: 'Name is required.' },
                                minLength: { value: 2, message: 'Name too short.' },
                                maxLength: { value: 60, message: 'Your name is too long.' },
                                validate: value => validator.isAlpha(value.replace(/\s/g, '')) || 'Invalid characters, only alphabets allowed',
                            })}
                        />
                        <div className={styles.ErrorMsg}>
                            <Fade bottom when={!!(errors?.name?.message)}>
                                <span>{errors?.name?.message}</span>
                            </Fade>
                        </div>
                    </div>

                    {/** Email */}
                    <div className={styles.FormGroupItem}>
                        <input type="text" name="email" placeholder="Email" className={`${errors?.message && styles.Error}`}
                            ref={register({
                                required: { value: true, message: 'Email is required.' },
                                validate: email => validator.isEmail(email) || 'Invalid E-mail'
                            })}
                        />
                        <div className={styles.ErrorMsg}>
                            <Fade bottom when={!!(errors?.email?.message)}>
                                <span>{errors?.email?.message}</span>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/** Message */}
                <div className={styles.FormGroup}>
                    <textarea name="message" id="message" className={`${errors?.message && styles.Error}`}
                        ref={register({
                            required: { value: true, message: 'Message is required.' },
                            minLength: { value: 2, message: 'Message too short.' },
                            maxLength: { value: 1000, message: 'Your name is too long.' },
                        })}
                    ></textarea>
                    <div className={styles.ErrorMsg}>
                        <Fade bottom when={!!(errors?.message?.message)}>
                            <span>{errors?.message?.message}</span>
                        </Fade>
                    </div>
                </div>

                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactForm
