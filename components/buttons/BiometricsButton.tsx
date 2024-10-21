import { BlurView } from 'expo-blur';
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import Icon from '@/assets/svgs/icons';

interface ButtonProps {
    onPress: () => void;
    disabled: boolean;
}

export function BiometricsButton({onPress, disabled}:ButtonProps) {
    return (
        <TouchableOpacity disabled={disabled} style={{opacity: disabled ? 0.8 : 1}} onPress={onPress}>
            <View style={[styles.container, styles.shadowBox]}>
                <Icon name='finger-print' size={normalise(27)} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        height: pixelSizeVertical(54),
        width: pixelSizeHorizontal(54),
        borderRadius: normalise(50),
        position: 'relative',
        alignItems: "center",
        justifyContent: "center",
    },
    shadowBox: {
        backgroundColor: 'white',
        ...Platform.select({
            android: {
                elevation: 10,
            },
            ios: {
                shadowColor: '#843CBF',
                shadowOffset: { width: 0, height: pixelSizeVertical(10) },
                shadowOpacity: 0.1,
                shadowRadius: normalise(10),
            },
        }),
    },
})