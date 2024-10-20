import { heightPixel, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    confetti: {
        
        backgroundColor: palette['primary--4'],
        height: heightPixel(217),
    },
    icon: {
        position: "absolute",
        top: pixelSizeVertical(130),
        alignSelf: "center",
    },
    content: {
        paddingTop: pixelSizeVertical(200),
        paddingBottom: pixelSizeVertical(37),
        paddingHorizontal: pixelSizeHorizontal(20),
    }
});