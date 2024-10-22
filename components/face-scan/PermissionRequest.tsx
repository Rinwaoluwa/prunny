import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FLEX } from '@/config/constants';
import { Button } from '@/components/buttons/Button';
import { AppText } from '@/components/AppText';
import { CameraViewPlaceholder } from '@/components/CameraViewPlaceholder';
import { normalise, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';

interface PermissionRequestProps {
    onRequestPermission: () => void;
    onSkip: () => void;
}

function PermissionRequest({ onRequestPermission, onSkip }: PermissionRequestProps) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <AppText fontFamily='bold' color='primary--1' fontSize={18}>
                        Please take a selfie in a well lit environment
                    </AppText>
                    <Button
                        title="Skip"
                        backgroundColor="transparent"
                        color='primary--2'
                        style={styles.skipButton}
                        onPress={onSkip}
                    />
                </View>
                <CameraViewPlaceholder onPress={() => { }} />
            </View>
            <View style={FLEX} />
            <Button
                title="Grant permission"
                backgroundColor='primary--4'
                onPress={onRequestPermission}
            />
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: "row",
        gap: normalise(20),
        alignItems: "center",
        marginBottom: normalise(20),
    },
    skipButton: {
        borderWidth: normalise(1.5),
        borderColor: palette['primary--2'],
        width: widthPixel(80),
        marginTop: normalise(10),
    },
});

export default PermissionRequest;