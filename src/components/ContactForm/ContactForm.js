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

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className={styles.ContactFormContainer}>
            <h2>Leave your message</h2>
            <form className={styles.ContactForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.FormGroupTwo}>
                    {/** Name */}
                    <div className={styles.FormGroupItem}>
                        <input type="text" name="name" placeholder="Enter your name"
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
                        <input type="text" name="email" placeholder="Email"
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
                    <textarea name="message" id="message"
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
