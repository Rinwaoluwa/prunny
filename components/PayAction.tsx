import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { AppText } from './AppText';
import { heightPixel, normalise, pixelSizeVertical, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';
import { IconName } from '@/assets/svgs/types';
import Icon from '@/assets/svgs/icons';
import { Href, Link } from 'expo-router';

interface PayActionProps {
    iconName: IconName;
    title: string;
    href: Href<string | object>;
}

const PayActions: React.FC<PayActionProps> = ({ iconName, title, href }) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={styles.action}>
                <Icon name={iconName} size={normalise(24)} fill={palette['yellow']} />
                <AppText color='black' fontFamily='regular' style={styles.actionText}>{title}</AppText>
            </TouchableOpacity>
        </Link>
    );
};

const styles = StyleSheet.create({
    action: {
        width: '48%',
        height: heightPixel(60),
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
        width: widthPixel(48),
        height: heightPixel(48),
        borderRadius: normalise(24),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: pixelSizeVertical(8),
    },
    actionText: {
        textAlign: 'center',
    },
});

export default PayActions;