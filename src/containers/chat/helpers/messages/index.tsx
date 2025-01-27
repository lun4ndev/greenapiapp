import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useContactsStore } from '../../../../services/store/contacts';
import styles from '../../styles/chat.module.scss';
import { Typography } from 'antd';
import Chat from './helpers/chat';

const Messages = () => {
    const selectChat = useContactsStore(state => state.selected_chat);

    return (
        <div className={styles.messages}>
            {
                selectChat ?
                    <Chat/>
                :
                    <div className={styles.notFound}>
                        <ExclamationCircleOutlined />
                        <Typography.Title level={5} className={styles.text}>Чтобы начать общение, выберите чат</Typography.Title>
                    </div>
            }
        </div>
    )
}

export default Messages;