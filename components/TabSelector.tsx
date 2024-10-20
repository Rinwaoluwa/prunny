import { palette } from '@/config/palette';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from './AppText';
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { FLEX } from '@/config/constants';

interface TabOption {
    key: string;
    label: string;
}

interface TabSelectorProps {
    options: TabOption[];
    selectedTab: string;
    onSelectTab: (key: string) => void;
}

export function TabSelector({ options, selectedTab, onSelectTab }: TabSelectorProps) {
    return (
        <View style={styles.container}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.key}
                    style={[
                        FLEX,
                        styles.tab,
                        selectedTab === option.key && styles.selectedTab,
                    ]}
                    onPress={() => onSelectTab(option.key)}
                >
                    <AppText
                        fontSize={12}
                        fontFamily={selectedTab === option.key ? "bold" : "regular"}
                        color={selectedTab === option.key ? "primary--4" : "black"}
                    >{option.label}</AppText>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: palette['primary--3'],
        borderRadius: normalise(8),
        padding: normalise(5),
        marginBottom: pixelSizeVertical(24),
    },
    tab: {
        paddingVertical: normalise(10),
        paddingHorizontal: pixelSizeHorizontal(16),
        borderRadius: normalise(6),
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedTab: {
        backgroundColor: palette['white'],
        shadowColor: palette['black'],
        shadowOffset: { width: 0, height: normalise(1) },
        shadowOpacity: normalise(0.09),
        shadowRadius: normalise(4),
        elevation: normalise(3),
    },
});