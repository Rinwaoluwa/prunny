import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { AppText } from '@/components/AppText';
import { pixelSizeVertical } from '@/config/normalise';

interface InstructionTextProps {
    isScanning: boolean;
    onRetakePhoto: () => void;
}

function InstructionText ({ isScanning, onRetakePhoto }: InstructionTextProps) {
    return (
        (
            <View style={styles.textsContainer}>
                <AppText
                    fontFamily='regular'
                    color='primary--1'
                    fontSize={16}
                    style={styles.instructionText}
                >
                    {isScanning ? "Please make sure that you are in a bright environment" : "Don't like this selfie?"}
                </AppText>

                {!isScanning && (
                    <Pressable onPress={onRetakePhoto}>
                        <AppText fontFamily='bold' color='primary--1' fontSize={16}>
                            Take another one
                        </AppText>
                    </Pressable>
                )}
            </View>
        )
    )
};

const styles = StyleSheet.create({
    textsContainer: {
        flexDirection: "row",
        marginTop: pixelSizeVertical(51),
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructionText: {
        textAlign: 'center',
    },
});

export default InstructionText;