import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

const REGULAR_ID = "@regular";
const ENCRYPTED_ID = "@encrypted";

const regularStorage = new MMKV({
    id: REGULAR_ID,
});

let encryptedStorage: MMKV | undefined;

const initEncryptedStorage = (encryptionKey: string) => {
    encryptedStorage = new MMKV({
        id: ENCRYPTED_ID,
    });
};

const mmkvToZustandStorage = (storage?: MMKV): StateStorage => {
    if (!storage) throw new Error("ERROR_CANNOT_USE_STORE_BEFORE_INIT");
    return {
        setItem: (name, value) => {
            return storage.set(name, value);
        },
        getItem: (name) => {
            const value = storage.getString(name);
            return value ?? null;
        },
        removeItem: (name) => {
            return storage.delete(name);
        },
    };
};

export {
    REGULAR_ID,
    regularStorage,
    ENCRYPTED_ID,
    encryptedStorage,
    initEncryptedStorage,
    mmkvToZustandStorage,
};
