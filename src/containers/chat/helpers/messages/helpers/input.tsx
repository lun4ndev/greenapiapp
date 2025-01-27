import { Button, Input } from 'antd';
import styles from '../../../styles/chat.module.scss';
import { SendOutlined } from '@ant-design/icons';
import { useContactsStore } from '../../../../../services/store/contacts';
import { useState } from 'react';

const InputMessage = () => {
    const sendMessage = useContactsStore(state => state.sendMessage);
    const selected_chat = useContactsStore(state => state.selected_chat);
    const [inputValue, setInputValue] = useState('');

    const onSearch = (value, _e, info) => {
        if(value){
            sendMessage(value, selected_chat);
            setInputValue('');
        }
    };

    return (
        <div className={styles.inputContent}>
            <Input.Search 
                style={{
                    borderRadius: 20
                }}
                variant="filled"
                className={styles.input} 
                size='large'
                placeholder="Введите сообщение" 
                onSearch={onSearch}
                enterButton={
                    <Button type="primary" icon={<SendOutlined />}/>
                }
                value={inputValue} // Управляемое значение
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}

export default InputMessage;