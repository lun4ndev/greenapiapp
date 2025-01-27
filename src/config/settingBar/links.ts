import { LaptopOutlined, MessageOutlined, QrcodeOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export const settingBarLinks = [{
    title: 'Чат',
    icon: MessageOutlined,
    type: 'top',
    key: Math.random() * 1000000,
},{
    title: 'Скачать',
    icon: QrcodeOutlined,
    type: 'top',
    key: Math.random() * 1000000,
},{
    title: 'Устройства',
    icon: LaptopOutlined,
    type: 'top',
    key: Math.random() * 1000000,
},{
    title: 'Группы',
    icon: UsergroupAddOutlined,
    type: 'top',
    key: Math.random() * 1000000,
}]