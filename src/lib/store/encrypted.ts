import create from "zustand";
import { persist } from "zustand/middleware";
import { mmkvToZustandStorage, encryptedStorage, ENCRYPTED_ID } from "./mmkv";

interface EncryptedInitialStateModel {
    secret: string;
}

interface EncryptedStoreModel {
    setSecret: (sessionId: string) => void;
}

const initialState: EncryptedInitialStateModel = {
    secret: "",
};

export const useStoreEncrypted = create(
    persist<EncryptedInitialStateModel & EncryptedStoreModel>(
        (set) => ({
            ...initialState,

            setSecret: (secret) => set({ secret }),
        }),
        {
            name: ENCRYPTED_ID,
            getStorage: () => mmkvToZustandStorage(encryptedStorage),
        }
    )
);
