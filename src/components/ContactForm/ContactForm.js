import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    return (
        <div className={styles.ContactFormContainer}>
            <h2>Leave your message</h2>
            <form className={styles.ContactForm}>
                <div className={styles.FormGroupTwo}>
                    <div className={styles.FormGroupItem}>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className={styles.FormGroupItem}>
                        <input type="text" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className={styles.FormGroup}>
                    <textarea name="message" id="message" ></textarea>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
