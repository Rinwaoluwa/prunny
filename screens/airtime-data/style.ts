import { StyleSheet } from 'react-native';
import { fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';

export const styles = StyleSheet.create({
    container: {
        padding: normalise(20),
        backgroundColor: palette['white'],
    },
    amountInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: normalise(1),
        borderColor: palette['grey--4'],
        borderRadius: normalise(5),
        marginTop: pixelSizeVertical(20),
        marginBottom: pixelSizeVertical(35),
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
    networkSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: widthPixel(1),
        borderColor: '#DDD',
        borderRadius: normalise(5),
        padding: 10,
        marginBottom: 20,
    },
    networkSelectorText: {
        fontSize: 16,
        color: '#666',
    },
    savedNumbersContainer: {
        backgroundColor: palette['primary--3'],
        height: heightPixel(279),
        paddingVertical: pixelSizeVertical(30),
        paddingHorizontal: pixelSizeVertical(24)
    },
});