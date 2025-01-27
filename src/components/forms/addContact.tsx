import { Button, Form, Input, Modal } from "antd"
import styles from './styles/forms.module.scss';
import { useFormsStore } from "../../services/store/forms";
import { useContactsStore } from "../../services/store/contacts";
import moment from "moment";

const AddContactForm = () => {
    const  statusForm = useFormsStore(state => state.addContactFormStatus);
    const toggleFormAddContact = useFormsStore(state => state.toggleAddContactForm);
    const addNewContact = useContactsStore(state => state.addContact);

    const onFinish = (values) => {
        addNewContact({
            phone: `${values.phone}@c.us`,
            name: values.phone,
            lastMessage: '',
            timeLastMessage: moment()
        });
        toggleFormAddContact(false);
    };

    return (
        <Modal
            title="Добавить новый контакт"
            open={statusForm}
            onCancel={()=>toggleFormAddContact(false)}
            footer={null}
            className={styles.modal}
            wrapClassName={styles.wrapper}
            centered
            destroyOnClose
        >
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
                size="large"
            >
                <Form.Item
                    label="Введите номер телефона"
                    name="phone"
                    style={{color: '#eee'}}
                    rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}
                >
                    <Input placeholder="Введите номер телефона" />
                </Form.Item>

                <Form.Item label={null} noStyle>
                    <Button type="primary" htmlType="submit">
                        Добавить
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddContactForm;