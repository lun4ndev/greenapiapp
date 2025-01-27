import { FC } from "react";
import styles from './styles/layout.module.scss';
import { Forms, SettingBar } from "../";
import { ConfigProvider } from "antd";

const Layout: FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#111b21',
                    colorBgBase: '#222e35',
                    colorBgLayout: '#111b21',
                    colorTextBase: '#fff',
                    borderRadius: 4,
                    fontFamily: 'Arial, sans-serif',
                },
                components: {
                    Button: {
                        colorPrimary: '#0a332c',
                        colorText: '#00a884',
                        colorPrimaryHover: '#0a332c',
                    },
                    Modal: {
                        colorBgElevated: '#111b21',
                        colorText: '#fff',
                        algorithm: true
                    },
                    Tooltip: {
                        colorBgSpotlight: 'rgba(17,27,33,0.8)',
                        colorTextLightSolid: '#eee',
                    }
                },
            }}
        >
            <Forms.MessageForGreenAPI/>
            <Forms.ConnectApiForm/>
            <div className={styles.layout}>
                <div className={styles.wrapper}>
                    <SettingBar/>
                    <div className={styles.chat}>
                        {children}
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Layout;