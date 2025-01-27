import { Layout } from "../../components";
import Contacts from "./helpers/contacts";
import Messages from "./helpers/messages";
import styles from './styles/chat.module.scss';

const Chat = () => {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <Contacts/>
                <Messages/>
            </div>
        </Layout>
    )
}

export default Chat;