import React from "react";
import { Text } from "react-native";
import { Outlet } from "react-router-native";
import { useStore } from "../lib/store/regular";

const Layout = () => {
    const sessionId = useStore((state) => state.sessionId);

    return (
        <>
            <Text>Session: {sessionId}</Text>
            <Outlet />
        </>
    );
};

export default Layout;
