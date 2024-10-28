import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { router } from "expo-router";

interface Props {
    callback: () => void;
}

export function useBiometrics({ callback }: Props) {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const handleBiometricsAuthentication = async () => {

        const biometricsAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login to Prunny with biometrics",
            cancelLabel: "Cancel",
            disableDeviceFallback: true,
        });


        if (biometricsAuth.success) {
            router.push("/(main)");
            callback();
        }
    }

    useEffect(() => {

        const fetchBiometricsData = async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();

            if (compatible) {
                setIsBiometricSupported(true);
            }

            // Biometrics is available and saved on device
            const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
            if (!savedBiometrics) {
                setIsBiometricSupported(false);
            }
        };

        fetchBiometricsData();

    }, [])

    return { isBiometricSupported, handleBiometricsAuthentication };
}