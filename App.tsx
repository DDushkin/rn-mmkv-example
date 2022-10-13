import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import { ROUTE } from "./src/lib/routes";
import MainScreen from "./src/screens/Main";
import InitScreen from "./src/screens/Init";
import PinScreen from "./src/screens/PIN";
import { useStore } from "./src/lib/store/regular";
import Layout from "./src/components/Layout";

export default function App() {
    const setSessionId = useStore((state) => state.setSessionId);

    useEffect(() => {
        const date = new Date().getMilliseconds;
        setSessionId(String(date));
    }, []);

    return (
        <NativeRouter>
            <Routes>
                <Route path={ROUTE.BASE} element={<Layout />}>
                    <Route index element={<PinScreen />} />
                    <Route path={ROUTE.INIT} element={<InitScreen />} />
                    <Route path={ROUTE.MAIN} element={<MainScreen />} />
                </Route>
            </Routes>
        </NativeRouter>
    );
}
