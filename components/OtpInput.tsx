import { normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';
import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData, ViewStyle } from 'react-native';

interface OtpInputProps {
    length: number;
    onComplete: (code: string) => void;
    inputStyle?: ViewStyle;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onComplete, inputStyle }) => {
    const [code, setCode] = useState<string[]>(Array(length).fill(''));
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
        if (!code.every(digit => digit !== '')) {
            return onComplete("");
        }
        onComplete(code.join(''));
    }, [code, onComplete]);

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text !== '' && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        if (event.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '') {
            const newCode = [...code];
            newCode[index - 1] = '';
            setCode(newCode);
            inputRefs.current[index - 1].focus();
        }
    };

    const handleFocus = (index: number) => {
        setFocusedIndex(index);
    };

    const handleBlur = () => {
        setFocusedIndex(null);
    };

    return (
        <View style={styles.container}>
            {code.map((digit, index) => (
                <View
                    key={index}
                    style={[
                        styles.inputContainer,
                        (focusedIndex === index || digit !== '') && styles.focusedInput,
                        inputStyle
                    ]}
                >
                    <TextInput
                        ref={ref => {
                            if (ref) inputRefs.current[index] = ref;
                        }}
                        style={[styles.input, digit !== '' && { color: palette['black'] }]}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={text => handleChange(text, index)}
                        onKeyPress={event => handleKeyPress(event, index)}
                        onFocus={() => handleFocus(index)}
                        onBlur={handleBlur}
                        value={digit}
                        selectionColor={palette['primary--2']}
                        secureTextEntry
                    />
                    {digit === '' && (
                        <View style={[
                            styles.placeholder,
                            digit !== '' && { backgroundColor: palette['primary--2'] }
                        ]} />
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // gap: pixelSizeHorizontal(15.56),
    },
    inputContainer: {
        width: pixelSizeHorizontal(68.8),
        height: pixelSizeVertical(52),
        borderWidth: normalise(1),
        borderColor: palette['primary--3'],
        borderRadius: normalise(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    focusedInput: {
        borderColor: palette['primary--2'],
    },
    input: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 24,
        color: '#5A3E84',
    },
    placeholder: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#2D114533',
        position: 'absolute',
    },
});

export default OtpInput;