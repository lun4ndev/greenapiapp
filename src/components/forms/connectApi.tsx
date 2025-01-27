import { Button, Form, Input, Modal } from "antd"
import styles from './styles/forms.module.scss';
import { useAppStore } from "../../services/store/app";

const ConnectApiForm = () => {
    const  statusForm = useAppStore(state => state.connected);
    const updateApiInformation = useAppStore(state => state.updateApiInformation);

    const onFinish = (values) => {
        updateApiInformation(values);
    };

    return (
        <Modal
            title="Подключение"
            open={!statusForm}
            closeIcon={null}
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
                    label="Url api сервера"
                    name="apiUrl"
                    style={{color: '#eee'}}
                    rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}
                >
                    <Input placeholder="Url api сервера" />
                </Form.Item>

                <Form.Item
                    label="idInstance"
                    name="idInstance"
                    style={{color: '#eee'}}
                    rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}
                >
                    <Input placeholder="idInstance" />
                </Form.Item>

                <Form.Item
                    label="apiTokenInstance"
                    name="apiTokenInstance"
                    style={{color: '#eee'}}
                    rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}
                >
                    <Input.Password placeholder="apiTokenInstance" />
                </Form.Item>

                <Form.Item label={null} noStyle>
                    <Button type="primary" htmlType="submit">
                        Подключить
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ConnectApiForm;