import React, { useCallback } from "react";
import PINCode from "@coinweb/react-native-pincode";
import { useStoreEncrypted } from "../lib/store/encrypted";
import { Text } from "react-native";
import { useEffect } from "react";
import { sleep } from "../lib/utils";
import { useNavigate } from "react-router-native";
import { PATH } from "../lib/routes";

const InitScreen = () => {
    const navigate = useNavigate();
    const setSecret = useStoreEncrypted((state) => state.setSecret);

    const handleInit = useCallback(async () => {
        setSecret("SECRET DATA");

        await sleep(2 * 1000);

        navigate(PATH.MAIN);
    }, []);

    useEffect(() => {
        handleInit();
    }, []);

    return <Text>Initializing...</Text>;
};

export default InitScreen;
