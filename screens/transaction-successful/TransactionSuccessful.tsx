import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './style';
import Icon from '@/assets/svgs/icons';
import { AppText } from '@/components/AppText';
import { normalise, pixelSizeVertical } from '@/config/normalise';
import { FLEX } from '@/config/constants';
import { Button } from '@/components/buttons/Button';
import { palette } from '@/config/palette';
import { useRouter } from 'expo-router';



export default function TransactionSuccessful() {
    const router = useRouter();

    return (
        <View style={[FLEX, styles.container]}>
            <View style={styles.confetti}>
                <LottieView
                    autoPlay
                    source={require('../../assets/lottie/confetti.json')}
                    style={FLEX}
                />
            </View>
            <Icon name='transaction-successful' size={normalise(200)} style={styles.icon} />

            <View style={[FLEX, styles.content]}>

                <AppText
                    color="primary--1"
                    fontSize={24}
                    fontFamily="bold"
                    style={{ marginBottom: pixelSizeVertical(15), textAlign: "center", }}
                >
                    Transaction Successful
                </AppText>
                <AppText
                    fontSize={16}
                    color="grey--2"
                    fontFamily="regular"
                    style={{ textAlign: "center" }}
                >
                    You have successfully sent  N15,000 {"\n"} to (Person Contact)
                </AppText>
                <View style={FLEX} />
                <Button
                    title="Send another request"
                    backgroundColor="transparent"
                    color='primary--4'
                    style={{
                        borderWidth: normalise(1.5),
                        borderColor: palette['primary--4'],
                    }}
                    onPress={() => router.replace("/send-money")}
                />
                <Button title="Go back to Dashboard" backgroundColor='primary--4' onPress={() => router.navigate("/(tabs)/")} />
            </View>
        </View>
    );
};

