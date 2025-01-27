import { Divider, Modal, Typography } from "antd"
import styles from './styles/forms.module.scss';
import { useAppStore } from "../../services/store/app";

const MessageForGreenAPI = () => {
    const  firstMessage = useAppStore(state => state.firstMessage);
    const  closeFirstMessage = useAppStore(state => state.closeFirstMessage);

    return (
        <Modal
            title="Сообщение по заданию"
            open={firstMessage}
            onCancel={()=>closeFirstMessage()}
            footer={null}
            className={styles.modal}
            wrapClassName={styles.wrapper}
            centered
            destroyOnClose
            zIndex={10000}
        >
            <Typography.Text>
                Получение уведомлений о входящих сообщениях недоступно, видимо надо подключать платный тариф.
            </Typography.Text>
            <Divider/>
            <Typography.Text>
                Для экономии времени использовал state manager zustand вместо redux
            </Typography.Text>
        </Modal>
    )
}

export default MessageForGreenAPI;