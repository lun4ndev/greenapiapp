import styles from '../../styles/chat.module.scss';
import ContactList from './helpers/contactList';
import HeaderContacts from './helpers/header';

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <HeaderContacts/>
            <ContactList/>
        </div>
    )
}

export default Contacts;