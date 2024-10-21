import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: pixelSizeVertical(37),
        paddingHorizontal: pixelSizeHorizontal(20),
        backgroundColor: palette['white']
    },
    textStyle: {
        marginBottom: pixelSizeVertical(20),
    }
});