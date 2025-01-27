import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import axios from 'axios';
import { useAppStore } from '../app';
import moment from 'moment';
import { message as MessageAntd } from 'antd';

export const useContactsStore = create(
    persist(
        (set, get) => ({
            contacts: [],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            addContact: (data: any) => set((state) => ({
                contacts: [...state.contacts, data]
            })),

            selected_chat: '',
			messages_list_chat: {},
            event_select_Chat: (chat_id: string) => set({selected_chat: chat_id}),
			getMessagesByChatId: (chatId: string) => {
                const { messages_list_chat } = get();
                return messages_list_chat[chatId] || [];
            },

            requestStatus: false,
			getMessages: async (chatId: string) => {

				const connectStore = await useAppStore.getState();

				set((state) => ({
					requestStatus: true,
					messages_list_chat: {
						...state.messages_list_chat,
						[chatId]: []
					}
				}));

				try {
					const { data } = await axios.post(`${connectStore?.apiUrl}/waInstance${connectStore?.idInstance}/getChatHistory/${connectStore?.apiTokenInstance}`, {
						chatId,
						count: 50
					});

					set((state) => ({
						contacts: state.contacts.map((contact) =>
						  contact.phone === chatId ? { 
								...contact,
								lastMessage: data.length ? data[0].textMessage : '',
								timeLastMessage: data.length ? data[0].timestamp : ''
							} : contact
						),
					}));

					set((state) => ({
						messages_list_chat: {
							...state.messages_list_chat,
							[chatId]: data.reverse()
						},
						requestStatus: false,
					}));

					set({ requestStatus: false });

				}catch(error){
					set({ requestStatus: false });
					MessageAntd.warning('Ошибка при подгрузке сообщений');
				}
			},
            sendMessage: async (message: string, chatId: string) => {
				const connectStore = await useAppStore.getState();
                set({ requestStatus: true });
            
				try {
					const { data } = await axios.post(`${connectStore?.apiUrl}/waInstance${connectStore?.idInstance}/sendMessage/${connectStore?.apiTokenInstance}`, {
						chatId,
						message
					});
					
					set((state) => ({
						messages_list_chat: {
							...state.messages_list_chat,
							[chatId]: [...(state.messages_list_chat[chatId] || []), {
								chatId,
								textMessage: message,
								idMessage: data.idMessage,
								timestamp: moment().unix(),
								type:"outgoing"
							}]
						},
						requestStatus: false,
					}));

					set((state) => ({
						contacts: state.contacts.map((contact) =>
						  contact.phone === chatId ? { 
								...contact,
								lastMessage: message,
								timeLastMessage: moment().unix()
							} : contact
						),
					}));

				} catch (error) {
					set({ requestStatus: false });
					MessageAntd.warning('Сообщение не отправлено');
				}
            },
        }),
        {
            name: 'contacts',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)