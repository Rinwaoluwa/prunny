import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    picker: {
        paddingVertical: pixelSizeVertical(2),
        borderWidth: normalise(1),
        borderRadius: normalise(5),
        paddingHorizontal: pixelSizeHorizontal(10),
    },
    dob: {
        marginVertical: pixelSizeVertical(8),
        paddingVertical: pixelSizeVertical(18),
        paddingHorizontal: pixelSizeHorizontal(24),
        borderWidth: normalise(1),
        borderRadius: normalise(5),
    }
})