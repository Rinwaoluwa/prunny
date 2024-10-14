import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';

export function useBiometrics() {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const handleBiometricsAuthentication = async () => {
        // Biometrics is available and saved on device
        const biometricsAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login to Prunny with biometrics",
            cancelLabel: "cancel"
        });

        if(biometricsAuth) setIsBiometricSupported(true);
    }

    useEffect(() => {

        const fetchBiometricsData = async () => {
            const isBiometricsAvailable = await LocalAuthentication.hasHardwareAsync();
            let supportedBiometrics;

            if (isBiometricsAvailable) {
                supportedBiometrics = LocalAuthentication.supportedAuthenticationTypesAsync();
            } else { setIsBiometricSupported(false); }

            const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
            if (!savedBiometrics) {
                setIsBiometricSupported(false);
            }
        };

        fetchBiometricsData();

    }, [])

    return { isBiometricSupported, handleBiometricsAuthentication };
}