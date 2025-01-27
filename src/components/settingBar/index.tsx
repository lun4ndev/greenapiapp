import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import styles from './styles/settingBar.module.scss';
import { Avatar, Tooltip } from 'antd';
import { useAppStore } from '../../services/store/app';
import { settingBarLinks } from '../../config/settingBar/links';
import LinkBar from './link';
import { useCallback } from 'react';

const SettingBar = () => {
    const barLinkActive = useAppStore(state => state.barLinkActive);
    const eventBarLinkActive = useAppStore(state => state.eventBarLinkActive);

    const changeLink = useCallback((title: string) => {
        eventBarLinkActive(title);
    }, [eventBarLinkActive]);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.section} ${styles.top}`}>
                {
                    settingBarLinks.map((link) => (
                        <LinkBar 
                            changeLink={changeLink} 
                            key={link.key} 
                            title={link.title} 
                            Icon={link.icon}
                            isActive={barLinkActive === link.title}
                        />
                    ))
                }
            </div>
            <div className={`${styles.section} ${styles.bottom}`}>
                <div className={styles.link}>
                    <Tooltip placement="right" title="Настройки">
                        <SettingOutlined />
                    </Tooltip>
                </div>
                <div className={styles.link}>
                    <Tooltip placement="right" title="Профиль">
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default SettingBar;