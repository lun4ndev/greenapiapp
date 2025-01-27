import { InfoCircleFilled } from '@ant-design/icons';
import { useContactsStore } from '../../../../../services/store/contacts';
import styles from '../../../styles/chat.module.scss';
import Contact from './contact';
import { useCallback } from 'react';
import { Typography } from 'antd';

const ContactList = () => {
    const contacts = useContactsStore(state => state.contacts);
    const selected_chat = useContactsStore(state => state.selected_chat);
    const selectChat = useContactsStore(state => state.event_select_Chat);

    const eventSelectChat = useCallback((chat_id)=> {
        selectChat(chat_id);
    }, []);

    return (
        <div className={styles.contactList}>
            {
                contacts.length ?
                    <div className={styles.content}>
                        {
                            contacts.map((contact) => (
                                <Contact 
                                    key={`${contact.phone + Math.random()}`} 
                                    lastMessage={contact.lastMessage}
                                    timeLastMessage={contact.timeLastMessage}
                                    name={contact.name}
                                    phone={contact.phone}
                                    isActive={selected_chat === contact.phone}
                                    eventSelectChat={eventSelectChat}
                                />
                            ))
                        }
                    </div>
                :
                    <div className={styles.notFound}>
                        <InfoCircleFilled />
                        <Typography.Title level={5} className={styles.text}>Контактов не найдено</Typography.Title>
                    </div>
            }
        </div>
    )
}

export default ContactList;
