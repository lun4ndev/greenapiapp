import { MoreOutlined, SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import { Input, Tooltip, Typography } from "antd";
import styles from '../../../styles/chat.module.scss';
import { useState } from "react";
import { Forms } from "../../../../../components";
import { useFormsStore } from "../../../../../services/store/forms";

const HeaderContacts = () => {
    const [active, setActive] = useState('Все');
    const toggleFormAddContact = useFormsStore(state => state.toggleAddContactForm);

    return (
        <div className={styles.header}>
            <Forms.AddContactForm/>

            <div className={styles.menu}>
                <div className={styles.title}>
                    <Typography.Title level={5} className={styles.text}>Чаты</Typography.Title>
                </div>
                <div className={styles.buttons}>
                    <Tooltip title="Добавить контакт" placement="bottom">
                        <UserAddOutlined onClick={() => toggleFormAddContact(true)}/>
                    </Tooltip>
                    <Tooltip title="Настройки" placement="bottom">
                        <MoreOutlined />
                    </Tooltip>
                </div>
            </div>
            <Input
                variant="borderless"
                className={styles.inputSearch}
                placeholder="Поиск"
                prefix={<SearchOutlined style={{ color: 'rgba(179, 179, 179, 0.25)' }} />}
            />
            <div className={styles.filter}>
                <div onClick={() => setActive('Все')} className={`${styles.title} ${active === 'Все' ? styles.active : ''}`}>
                    <Typography.Text>Все</Typography.Text>
                </div>
                <div onClick={() => setActive('Непрочитанное')} className={`${styles.title} ${active === 'Непрочитанное' ? styles.active : ''}`}>
                    <Typography.Text>Непрочитанное</Typography.Text>
                </div>
                <div onClick={() => setActive('Избранное')} className={`${styles.title} ${active === 'Избранное' ? styles.active : ''}`}>
                    <Typography.Text>Избранное</Typography.Text>
                </div>
                <div onClick={() => setActive('Группы')} className={`${styles.title} ${active === 'Группы' ? styles.active : ''}`}>
                    <Typography.Text>Группы</Typography.Text>
                </div>
            </div>
        </div>
    )
}

export default HeaderContacts;