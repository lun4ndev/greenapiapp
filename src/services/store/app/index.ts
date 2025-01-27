import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


export const useAppStore = create(
	persist(
		(set) => ({
			barLinkActive: 'Чат',
			eventBarLinkActive: (title: string) => set({ barLinkActive: title }),

			apiUrl: '',
			idInstance: '',
			apiTokenInstance: '',
			connected: false,
			updateApiInformation: (data) => set({
				apiUrl: data?.apiUrl || '',
				idInstance: data?.idInstance || '',
				apiTokenInstance: data?.apiTokenInstance || '',
				connected: data?.idInstance && data?.apiTokenInstance && data?.apiUrl ? true : false
			}),

			firstMessage: true,
			closeFirstMessage: () => set({firstMessage: false})
		}),
		{
			name: 'app',
			storage: createJSONStorage(() => localStorage),
		},
	),
)