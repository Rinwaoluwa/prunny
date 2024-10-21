import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: pixelSizeHorizontal(20),
        marginTop: pixelSizeVertical(32),
    },
    footer: {
        marginBottom: pixelSizeVertical(49),
        justifyContent: "flex-end"
    },
    footerText: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: pixelSizeVertical(54),
    },
});