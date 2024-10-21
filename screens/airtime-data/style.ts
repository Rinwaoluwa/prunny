import { StyleSheet } from 'react-native';
import { fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: palette['white'],
    },
    container: {
        padding: normalise(20),
    },
    amountInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: normalise(1),
        borderColor: palette['grey--4'],
        borderRadius: normalise(5),
        marginTop: pixelSizeVertical(20),
    },
    contactList: {
        justifyContent: "center",
        width: "100%",
        height: "70%",
    },
    nairaIcon: {
        padding: normalise(10),
        backgroundColor: palette['primary--3'],
        borderTopLeftRadius: normalise(5),
        borderBottomLeftRadius: normalise(5),
        marginRight: pixelSizeHorizontal(8)
    },
    amount: {
        width: "80%",
        fontSize: fontPixel(14),
        fontWeight: "bold",
        color: palette['primary--1'],
    },
    savedNumbersContainer: {
        backgroundColor: palette['primary--3'],
        height: heightPixel(279),
        paddingVertical: pixelSizeVertical(30),
        paddingHorizontal: pixelSizeVertical(24),
        position: "relative",
        zIndex: -20,
        marginTop: pixelSizeVertical(35),
    },
});