import { StyleSheet } from 'react-native';
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: pixelSizeHorizontal(20),
        marginTop: pixelSizeVertical(74),
    },
    textInputStyle: {
        marginBottom: pixelSizeVertical(24),
    }, 
    linkStyle: {
        flexDirection: "row",
        alignItems: "center", 
        gap: normalise(8),
        marginTop: pixelSizeVertical(21),
        width: pixelSizeHorizontal(137),
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: normalise(16),
        marginTop: pixelSizeVertical(112),
    },
    loginButton: {
        height: pixelSizeVertical(54),
        width: pixelSizeHorizontal(246)
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: pixelSizeVertical(126),
        marginBottom: pixelSizeVertical(48),
    },
    bottomSheetStyle: {
        alignItems: "center",
        justifyContent: "space-between",
        gap: normalise(20),
        paddingVertical: pixelSizeVertical(41),
    },
})