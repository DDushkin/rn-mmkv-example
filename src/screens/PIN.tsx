import React from "react";
import PINCode from "@coinweb/react-native-pincode";
import { Button, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { PATH } from "../lib/routes";

const PinScreen = () => {
    const navigate = useNavigate();

    const handleProcess = (pinCode: string) => {
        navigate(PATH.INIT);
    };

    return (
        <>
            <PINCode
                buttonNumberComponent={(i: string, onPress: any) => {
                    return (
                        <Button
                            onPress={() => {
                                onPress(i);
                            }}
                            title={i}
                        />
                    );
                }}
                buttonDeleteComponent={(onRemove: any) => (
                    <Pressable
                        onPress={() => {
                            onRemove();
                        }}
                    ></Pressable>
                )}
                status="enter"
                passwordLength={6}
                stylePinCodeTextTitle={{
                    fontSize: 22,
                    lineHeight: 33,
                    fontWeight: "500",
                }}
                stylePinCodeTextSubtitle={{
                    fontWeight: "400",
                    fontSize: 16,
                    lineHeight: 24,
                    marginTop: 10,
                }}
                stylePinCodeViewTitle={{
                    flex: 0,
                }}
                stylePinCodeHiddenPasswordSizeFull={10}
                stylePinCodeHiddenPasswordSizeEmpty={10}
                stylePinCodeHiddenPasswordCircle={{
                    flexDirection: "row",
                    width: "70%",
                    justifyContent: "space-around",
                }}
                endProcessFunction={handleProcess}
            />
        </>
    );
};

export default PinScreen;
