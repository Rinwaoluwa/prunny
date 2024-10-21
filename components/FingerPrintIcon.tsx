import Icon from "@/assets/svgs/icons";
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";
import { StyleSheet, Pressable, ViewStyle } from "react-native";

interface Props {
    style: ViewStyle;
    onPress: () => void;
}

export function FingerPrintIcon({ style, onPress }:Props) {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <Icon size={normalise(52)} name="finger-print" />
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        height: pixelSizeVertical(86),
        width: pixelSizeHorizontal(86),
        borderRadius: normalise(80),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: palette['grey--1'],
    }
});