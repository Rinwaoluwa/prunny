import { heightPixel, normalise, widthPixel } from '@/config/normalise';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import Icon from '@/assets/svgs/icons';
import { palette } from '@/config/palette';

interface Props {
    onPress: () => void;
}

export function CameraViewPlaceholder({ onPress }: Props) {
    return (
        <View style={styles.faceIdConatiner}>
            <View style={styles.outline}>
                <Pressable style={styles.placeholderContainer} onPress={onPress}>
                    <Icon name='face-scan' size={normalise(100)} />
                </Pressable>
            </View>
            <View style={styles.camerIconContainer}>
                <Icon name='camera' size={normalise(36)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    faceIdConatiner: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    outline: {
        borderColor: palette['primary--3'],
        borderWidth: normalise(8),
        width: widthPixel(325),
        height: heightPixel(325),
        borderRadius: normalise(175),
        justifyContent: "center",
        alignItems: "center",
    },
    placeholderContainer: {
        width: widthPixel(300),
        height: heightPixel(300),
        borderRadius: normalise(150),
        backgroundColor: palette['primary--3'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    camerIconContainer: {
        position: 'absolute',
        bottom: normalise(-15),
        left: "40%",
        zIndex: 1,
        backgroundColor: palette['white'],
        height: heightPixel(64),
        width: widthPixel(64),
        borderRadius: normalise(32),
        justifyContent: "center",
        alignItems: "center",
        shadowColor: palette['primary--4'],
        shadowOffset: { width: 0, height: heightPixel(10) },
        shadowOpacity: normalise(0.07),
        shadowRadius: normalise(10),
        elevation: normalise(10),
    },
})