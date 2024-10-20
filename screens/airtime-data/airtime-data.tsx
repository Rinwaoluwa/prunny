import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabSelector } from '@/components/TabSelector';
import { useForm, Controller } from 'react-hook-form';
import { AppTextInput } from '@/components/AppTextInput';
import { formatAmount } from '@/utils/helpers';
import { fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';
import Icon from '@/assets/svgs/icons';
import { FLEX, NETWORK_PROVIDERS } from '@/config/constants';
import { AppText } from '@/components/AppText';
import { Button } from '@/components/buttons/Button';
import { styles } from './style';
import NetworkDropdown from '@/components/NetworkProviderDropdwon';


interface AirtimeDataProps {
    onContinue: () => void;
    onBack: () => void;
}

export default function AirtimeData({ onContinue, onBack }: AirtimeDataProps) {
    const [focused, setFocused] = useState(false);
    const [selectedTab, setSelectedTab] = useState('airtime');
    const [selectedProvider, setSelectedProvider] = useState<typeof NETWORK_PROVIDERS[0] | null>(null);

    const handleSelectProvider = (provider: typeof NETWORK_PROVIDERS[0]) => {
        setSelectedProvider(provider);
    };

    const tabOptions = [
        { key: 'airtime', label: 'Airtime' },
        { key: 'data', label: 'Data' },
    ];

    const handleTabSelect = (key: string) => {
        setSelectedTab(key);
    };

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            phoneNumber: '',
            amount: '',
        },
    });


    return (
        <>
            <View style={styles.container}>
                <TabSelector
                    options={tabOptions}
                    selectedTab={selectedTab}
                    onSelectTab={handleTabSelect}
                />
                {selectedTab === 'airtime' ? (
                    <>
                        <AppTextInput
                            placeholder="Enter Phone Number"
                            control={control}
                            label="Phone Number"
                            error={errors.phoneNumber?.message}
                            name="phoneNumber"
                            keyboardType="numeric"
                        />
                        <View style={[styles.amountInputContainer, focused && { borderColor: palette['primary--2'] }]}>
                            <View style={styles.nairaIcon}>
                                <Icon name='naira-sign' size={normalise(35)} />
                            </View>
                            <Controller
                                control={control}
                                name="amount"
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.amount}
                                        value={value}
                                        onChangeText={(text) => {
                                            const formattedText = formatAmount(text);
                                            onChange(formattedText);
                                        }}
                                        onBlur={() => setFocused(false)}
                                        onFocus={() => setFocused(true)}
                                        keyboardType="numeric"
                                        selectionColor={palette['primary--2']}
                                        placeholder="Enter amount"
                                    />
                                )}
                            />
                        </View>
                    </>
                ) : (
                    <NetworkDropdown
                        providers={NETWORK_PROVIDERS}
                        selectedProvider={selectedProvider}
                        onSelectProvider={handleSelectProvider}
                    />
                )}
            </View>
            <View style={styles.savedNumbersContainer}>
                <AppText color="primary--1" fontFamily="bold">
                    Saved Numbers
                </AppText>
                <View style={styles.contactList}>
                    <Icon name='dialer' size={normalise(70)} style={{ alignSelf: "center" }} />
                    <AppText
                        fontSize={12}
                        color="grey--2"
                        fontFamily="regular"
                        style={{ textAlign: "center" }}
                    >
                        You currently don’t have any number saved yet
                    </AppText>
                </View>
            </View>
            <View style={[FLEX, styles.container]}>
                <Button title="Continue" backgroundColor="primary--4" />
            </View>
        </>
    );
};

