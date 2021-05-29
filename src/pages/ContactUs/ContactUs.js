import React from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import ContactDetailsWidget from '../../components/ContactDetailsWidget/ContactDetailsWidget';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './ContactUs.module.scss';
import image from '../../assets/images/contact.jpg';

const ContactUs = () => {
    return (
        <div className={styles.ContactPage}>
            <PageHeader label="Contact Us" backgroundImg={image} />
            <div className={styles.ContactFormAndDetails}>
                <div className={styles.ContactForm}>
                    <ContactForm />
                </div>
                <div className={styles.ContactDetails}>
                    <ContactDetailsWidget />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
