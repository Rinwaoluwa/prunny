import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '@/config/palette';
import { fontPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import Icon from '@/assets/svgs/icons';

interface PhoneNumberInputProps {
    onChangeText: (text: string) => void;
    value: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onChangeText, value }) => {
    const [focused, setFocused] = useState(false)
    return (
        <View style={[styles.container,
        {
            borderColor: focused ? palette['primary--2'] : palette['primary--3'],
            borderWidth: normalise(1),
            borderRadius: normalise(5),
            paddingHorizontal: pixelSizeHorizontal(10),
            marginVertical: pixelSizeVertical(8),
        }]}
        >
            <View style={styles.flagContainer}>
                <Icon name="nigerian-flag" height={pixelSizeVertical(20)} width={pixelSizeHorizontal(40)} />
                <Text style={styles.countryCode}>+234</Text>
            </View>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onBlur={() => {
                    setFocused(false);
                }}
                onFocus={() => {
                    setFocused(true);
                }}
                placeholder="Type your phone number"
                placeholderTextColor="#A0A0A0"
                keyboardType="phone-pad"
                selectionColor={palette['primary--2']}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: pixelSizeVertical(54),
        marginBottom: pixelSizeVertical(24),
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalise(6),
        marginRight: pixelSizeVertical(24),
    },
    countryCode: {
        fontSize: fontPixel(14),
    },
    input: {
        flex: 1,
        fontSize: fontPixel(14),
        paddingVertical: pixelSizeVertical(15),
        fontFamily: "medium",
        color: '#2D114580',
    },
});

export default PhoneNumberInput;