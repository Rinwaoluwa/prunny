import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CameraView } from 'expo-camera';
import * as Progress from 'react-native-progress';
import Icon from '@/assets/svgs/icons';
import { heightPixel, normalise, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';

interface CameraCaptureProps {
    cameraRef: React.RefObject<CameraView>;
    image: string | undefined;
    progressArc: number;
    isScanning: boolean;
}

function CameraCapture({ cameraRef, image, progressArc, isScanning }: CameraCaptureProps) {
    return (
        (
            <View style={styles.cameraContainer}>
                <Progress.Circle
                    size={normalise(330)}
                    thickness={10}
                    showsText={false}
                    strokeCap="round"
                    color={palette['primary--4']}
                    unfilledColor={palette['primary--2']}
                    borderWidth={0}
                    progress={progressArc}
                    style={styles.progressCircle}
                />
                <View style={styles.cameraWrapper}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.capturedImage} />
                    ) : (
                        <CameraView
                            ref={cameraRef}
                            style={styles.camera}
                            facing="front"
                        />
                    )}
                </View>
                {!isScanning && (
                    <View style={styles.camerIconContainer}>
                        <Icon name='camera' size={normalise(36)} />
                    </View>
                )}
            </View>
        )
    )
};

const styles = StyleSheet.create({
    cameraContainer: {
        width: widthPixel(330),
        height: heightPixel(330),
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
    },
    cameraWrapper: {
        width: widthPixel(300),
        height: heightPixel(300),
        borderRadius: normalise(150),
        overflow: 'hidden',
    },
    camerIconContainer: {
        position: 'absolute',
        bottom: normalise(-30),
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
    capturedImage: {
        width: '100%',
        height: '100%',
    },
    progressCircle: {
        position: 'absolute',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
});

export default CameraCapture;