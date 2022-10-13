import React from "react";
import { useStoreEncrypted } from "../lib/store/encrypted";
import { Text } from "react-native";

const MainScreen = () => {
    const secret = useStoreEncrypted((state) => state.secret);

    return <Text>Main screen: {secret}</Text>;
};

export default MainScreen;
