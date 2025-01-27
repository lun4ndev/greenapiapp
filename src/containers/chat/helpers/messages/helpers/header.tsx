import { Avatar, Tooltip, Typography } from 'antd';
import styles from '../../../styles/chat.module.scss';
import { MoreOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { useContactsStore } from '../../../../../services/store/contacts';

const HeaderChat = () => {
    const selected_chat = useContactsStore(state => state.selected_chat);

    return (
        <div className={styles.header}>
            <div className={styles.contactAvatar}>
                <Avatar size={44} className={styles.avatar} icon={<UserOutlined />} />
                <Typography.Title className={styles.text} level={5}>{selected_chat.replaceAll('@c.us', '')}</Typography.Title>
            </div>
            <div className={styles.buttons}>
                <Tooltip title="Магазин" placement='bottom'>
                    <ShopOutlined className={styles.button} />
                </Tooltip>
                <Tooltip title="Настройки" placement='bottom'>
                    <MoreOutlined className={styles.button}/>
                </Tooltip>
            </div>
        </div>
    )
}

export default HeaderChat;