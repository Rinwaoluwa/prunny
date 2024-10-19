import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";
import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: Platform.OS === "android" ? pixelSizeVertical(30) : pixelSizeVertical(35),
        paddingHorizontal: pixelSizeVertical(20),
        backgroundColor: palette['primary--4'],
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalise(15),
    },
    avatar: {
        height: pixelSizeVertical(37),
        width: pixelSizeHorizontal(37),
        borderRadius: normalise(7),
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    payAction: {
        padding: pixelSizeVertical(21),
        backgroundColor: palette['white'],
    },

    title: {
        marginBottom: pixelSizeVertical(16),
    },
    bannerSection: {
        paddingLeft: pixelSizeVertical(21),
        backgroundColor: palette['white'],
        gap: pixelSizeVertical(24),
    }
})