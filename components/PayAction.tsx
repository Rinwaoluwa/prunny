import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { AppText } from './AppText';
import { normalise, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';
import { IconName } from '@/assets/svgs/types';
import Icon from '@/assets/svgs/icons';

interface PayActionProps {
    onPress: () => void;
    iconName: IconName;
    title: string;
}

const PayActions: React.FC<PayActionProps> = ({ iconName, title, onPress }) => {
    return (
        <TouchableOpacity style={styles.action} onPress={onPress}>
            <Icon name={iconName} size={24} />
            <Text style={styles.actionText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    action: {
        width: '48%',
        height: pixelSizeVertical(60),
        backgroundColor: palette['white'],
        borderRadius: normalise(8),
        padding: pixelSizeVertical(18),
        marginBottom: pixelSizeVertical(16),
        alignItems: 'center',
        shadowColor: palette['black'],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: normalise(4),
        elevation: normalise(3),
        borderWidth: normalise(1),
        borderColor: palette['primary--3'],
        flexDirection: "row",
        gap: normalise(11),
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    actionText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default PayActions;