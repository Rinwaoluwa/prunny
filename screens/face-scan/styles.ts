import { pixelSizeVertical } from "@/config/normalise";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scanText: {
        textAlign: "center",
        marginBottom: pixelSizeVertical(80),
    },
});