import { ElementType, FC, memo } from 'react';
import styles from './styles/settingBar.module.scss';
import { Tooltip } from 'antd';

const LinkBar: FC<{
    title: string,
    Icon: ElementType,
    changeLink: () => void,
    isActive: boolean
}> = memo(({title, Icon, changeLink, isActive}) => {
    return (
        <Tooltip placement="right" title={title}>
            <div  
                className={`${styles.link} ${isActive ? styles.active : ''}`} 
                onClick={() => changeLink(title)}
            >
                <Icon/>
            </div>
        </Tooltip>
    )
})

export default LinkBar;