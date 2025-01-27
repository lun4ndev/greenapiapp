import styles from '../../../styles/chat.module.scss';
import HeaderChat from './header';
import InputMessage from './input';
import ListMessages from './list';

const Chat = () => {
    return (
        <div className={styles.chatWrapper}>
            <div className={styles.content}>
                <HeaderChat/>
                <ListMessages/>
                <InputMessage/>
            </div>
        </div>
    )
}

export default Chat;