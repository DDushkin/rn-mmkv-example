import create from "zustand";
import { persist } from "zustand/middleware";
import { mmkvToZustandStorage, regularStorage, REGULAR_ID } from "./mmkv";

interface RegularInitialStateModel {
    sessionId: string;
}

interface RegularStoreModel {
    setSessionId: (sessionId: string) => void;
}

const initialState: RegularInitialStateModel = {
    sessionId: "",
};

export const useStore = create(
    persist<RegularInitialStateModel & RegularStoreModel>(
        (set) => ({
            ...initialState,

            setSessionId: (sessionId) => set({ sessionId }),
        }),
        {
            name: REGULAR_ID,
            getStorage: () => mmkvToZustandStorage(regularStorage),
        }
    )
);
