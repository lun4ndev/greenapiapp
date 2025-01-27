import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useFormsStore = create(
    persist(
        (set) => ({
            addContactFormStatus: false,
            toggleAddContactForm: (status: boolean) => set({addContactFormStatus: status}),
        }),
        {
            name: 'app',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)