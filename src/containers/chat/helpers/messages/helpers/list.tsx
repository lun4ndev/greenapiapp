import { memo, useEffect, useRef } from 'react';
import styles from '../../../styles/chat.module.scss';
import { List, AutoSizer } from 'react-virtualized';
import { useContactsStore } from '../../../../../services/store/contacts';
import moment from 'moment';
import { useShallow } from 'zustand/shallow';
import { Typography } from 'antd';

const ListMessages = memo(() => {
	const listRef = useRef(null);
	const selected_chat = useContactsStore(state => state.selected_chat);
	const getMessages = useContactsStore(state => state.getMessages);
	const messages = useContactsStore(useShallow(state => state.getMessagesByChatId(selected_chat)));

    useEffect(() => {
        getMessages(selected_chat);
    }, []);

    useEffect(() => {
        if (listRef.current && messages.length > 0) {
            listRef.current.scrollToRow(messages.length - 1);
        }
    }, [selected_chat, messages.length]);

	const rowRenderer = ({ index, key, style }: { index: number; key: string; style: React.CSSProperties }) => {
		const message = messages[index];
		return (
			<div 
				key={key} 
				style={{ 
					...style,
					width: 'auto',
					maxWidth: '90%',
					right: message.type === 'outgoing' ? 0 : 'auto',
					left: message.type === 'outgoing' ? 'auto' : 0,
					
				}} className={`${styles.messageWrapper}`}
			>
				<div style={{
					background: '#005c4b',
					display: 'flex',
					flexDirection: 'column',
					padding: '5px 10px',
					borderRadius: 10,
					boxSizing: 'border-box'
				}}>
					<div>
						<Typography.Text 
							style={{
								color: 'rgba(255,255,255,0.57)', 
								float: 'right',
								margin: 0
							}}
						>
							{message.textMessage}
						</Typography.Text></div>
					<div>
						<Typography.Text 
							style={{
								color: 'rgba(255,255,255,0.4)', 
								float: 'right',
								fontSize: 11,
								margin: 0
							}}
						>
							{moment.unix(message.timestamp).format('DD-MM-YYYY HH:mm')}
						</Typography.Text>
					</div>
				</div>
			</div>
		);
	};

    return (
        <div className={styles.messageListWrapper}>
            <AutoSizer className={styles.virtWrapper}>
                {({ height, width }) => (
                    <List
						ref={listRef}
						width={width}
						height={height}
						rowCount={messages.length}
						rowHeight={100}
						rowRenderer={rowRenderer}
						scrollToAlignment="end"
                    />
                )}
            </AutoSizer>
        </div>
    )
});

export default ListMessages;