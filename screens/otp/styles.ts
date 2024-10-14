import { StyleSheet } from "react-native";
import { normalise, pixelSizeVertical } from "@/config/normalise";

export const styles = StyleSheet.create({
    container: {
        marginTop: pixelSizeVertical(32),
    },
    caption: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: pixelSizeVertical(29),
    },
    resend: {
        flexDirection: "row",
        gap: normalise(11),
        marginTop: pixelSizeVertical(11),
    }
});