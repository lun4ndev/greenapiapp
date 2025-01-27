import { Avatar, Typography } from 'antd';
import styles from '../../../styles/chat.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { FC, memo } from 'react';
import { timeMessage } from '../../../../../services/time/timeMessage';

const Contact: FC<{
    lastMessage: string, 
    timeLastMessage: string, 
    name: string, 
    phone: string, 
    isActive: boolean, 
    eventSelectChat: () => void
}> = memo(({ 
    lastMessage, 
    timeLastMessage, 
    name, 
    phone, 
    isActive, 
    eventSelectChat 
}) => {

    return (
        <div 
            className={`${styles.contact} ${isActive ? styles.activeChat : ''}`}
            onClick={() => eventSelectChat(phone)}
        >
            <div className={styles.avatar}>
                <Avatar size={54} className={styles.avatar} icon={<UserOutlined />} />
            </div>
            <div className={styles.contactInformation}>
                <div className={styles.informationTop}>
                    <Typography.Title className={styles.phoneText} level={5}>{name}</Typography.Title>
                    <Typography.Text className={styles.timeText}>{timeMessage(timeLastMessage)}</Typography.Text>
                </div>
                <div className={styles.message}>
                    <Typography.Text className={styles.text}>{lastMessage || 'Сообщений нет'}</Typography.Text>
                </div>
            </div>
        </div>
    )
})

export default Contact;