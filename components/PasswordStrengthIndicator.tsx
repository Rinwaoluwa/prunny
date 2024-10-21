import { fontPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PasswordStrengthIndicatorProps {
    password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
    const getPasswordStrength = (password: string): [number, string, string] => {
        if (password.length < 4) return [1, 'Very weak', palette['red']];
        if (password.length < 8) return [2, 'So-so', palette['yellow']];
        if (password.length < 12) return [3, 'Good', palette['green--1']];
        return [4, 'Great', palette['green--2']];
    };

    const [strength, label, color] = getPasswordStrength(password);

    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                {[...Array(4)].map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.barSegment,
                            index < strength ? { backgroundColor: color } : { backgroundColor: palette['grey--3'] },
                        ]}
                    />
                ))}
            </View>
            <Text style={[styles.label, { color }]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: pixelSizeVertical(8),
        marginBottom: pixelSizeVertical(26),
    },
    barContainer: {
        flexDirection: 'row',
        height: pixelSizeHorizontal(4),
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    barSegment: {
        flex: 1,
        marginHorizontal: pixelSizeHorizontal(4),
        backgroundColor: 'transparent',
    },
    label: {
        marginTop: pixelSizeVertical(5),
        fontSize: fontPixel(12),
        textAlign: 'right',
    },
});

export default PasswordStrengthIndicator;