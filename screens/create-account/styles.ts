import { StyleSheet } from "react-native";
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";

export const styles = StyleSheet.create({
    terms: {
        flexDirection: "row",
        backgroundColor: palette['primary--3'],
        paddingVertical: pixelSizeVertical(18),
        paddingHorizontal: pixelSizeHorizontal(15),
        flexWrap: "wrap",
        borderRadius: normalise(8),
    }
});