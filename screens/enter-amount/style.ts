import { fontPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: pixelSizeVertical(37),
        paddingHorizontal: pixelSizeHorizontal(20),
        backgroundColor: palette['white']
    },
    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: normalise(3),
        borderColor: "#2D114503",
        marginBottom: pixelSizeVertical(13),
    },
    amount: {
        width: "80%", 
        fontSize: fontPixel(36), 
        fontWeight: "bold",
        color: palette['primary--1'],
    }
});