import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { FLEX } from '@/config/constants';
import { Button } from '@/components/buttons/Button';
import { AppText } from '@/components/AppText';
import PermissionRequest from '@/components/face-scan/PermissionRequest';
import CameraCapture from '@/components/face-scan/CameraCapture';
import InstructionText from '@/components/face-scan/InstructionText';
import { styles } from './styles';

interface Props {
    handleContinue: () => void;
}

export default function FaceScan({ handleContinue }: Props) {
    const [permission, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState<string | undefined>(undefined);
    const [progressArc, setProgressArc] = useState(0);
    const [isScanning, setIsScanning] = useState(false);
    const cameraRef = useRef<CameraView>(null);

    useEffect(() => {
        const startScanning = () => {
            setIsScanning(true);
            const interval = setInterval(() => {
                setProgressArc((prev) => {
                    if (prev >= 1) {
                        clearInterval(interval);
                        handleCapture();
                        setIsScanning(false);
                        return 1;
                    }
                    return prev + 0.2;
                });
            }, 1000);
            return interval;
        };

        const timeout = setTimeout(() => {
            if (permission?.granted && !image) {
                const interval = startScanning();
                return () => clearInterval(interval);
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [permission?.granted, image]);

    const handleCapture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setImage(photo?.uri);
        }
    };

    const handleRetakePhoto = () => {
        setProgressArc(0);
        setImage(undefined);
    };

    if (!permission) {
        return null;
    }

    if (!permission.granted) {
        return <PermissionRequest onRequestPermission={requestPermission} onSkip={handleContinue} />;
    }

    return (
        <View style={styles.container}>
            {isScanning && (
                <AppText fontFamily='bold' color='primary--1' fontSize={18} style={styles.scanText}>
                    Scanning...
                </AppText>
            )}
            <CameraCapture
                cameraRef={cameraRef}
                image={image}
                progressArc={progressArc}
                isScanning={isScanning}
            />
            <InstructionText isScanning={isScanning} onRetakePhoto={handleRetakePhoto} />
            <View style={FLEX} />
            {!isScanning && (
                <Button
                    title="Proceed to next step"
                    backgroundColor='primary--4'
                    onPress={handleContinue}
                    disabled={!image}
                />
            )}
        </View>
    );
}

