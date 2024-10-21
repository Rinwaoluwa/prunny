import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { TabSelector } from '@/components/TabSelector';
import { useForm, Controller } from 'react-hook-form';
import { AppTextInput } from '@/components/AppTextInput';
import { formatAmount } from '@/utils/helpers';
import { normalise } from '@/config/normalise';
import { palette } from '@/config/palette';
import Icon from '@/assets/svgs/icons';
import { FLEX, NETWORK_PLANS, NETWORK_PROVIDERS } from '@/config/constants';
import { AppText } from '@/components/AppText';
import { Button } from '@/components/buttons/Button';
import { styles } from './style';
import Dropdown from '@/components/Dropdown';


interface AirtimeDataProps {
    onContinue: () => void;
}

export default function AirtimeData({ onContinue }: AirtimeDataProps) {
    const [focused, setFocused] = useState(false);
    const [selectedTab, setSelectedTab] = useState('airtime');
    const [selectedProvider, setSelectedProvider] = useState<typeof NETWORK_PROVIDERS[0] | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<typeof NETWORK_PLANS[0] | null>(null);

    const tabOptions = [
        { key: 'airtime', label: 'Airtime' },
        { key: 'data', label: 'Data' },
    ];

    const handleTabSelect = (key: string) => {
        setSelectedTab(key);
    };

    const handleSelectProvider = (provider: any) => {
        setSelectedProvider(provider);
    };
    const handleSelectPlan = (plan: any) => {
        setSelectedPlan(plan);
    };

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            phoneNumber: '',
            amount: '',
        },
    });


    return (
        <View style={[FLEX, styles.root]}>
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
                    <>
                        <Dropdown
                            providers={NETWORK_PROVIDERS as any} // TODO fix type
                            selectedProvider={selectedProvider as any} // TODO fix type
                            onSelectProvider={handleSelectProvider}
                        />
                        {selectedProvider && (
                            <Dropdown
                                providers={NETWORK_PLANS as any} // TODO fix type
                                selectedProvider={selectedPlan as any} // TODO fix type
                                onSelectProvider={handleSelectPlan}
                                placeholder='Select Plan'
                            />
                        )}
                    </>
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

            <View style={FLEX} />

            <View style={styles.container}>
                <Button title="Continue" backgroundColor="primary--4" onPress={onContinue} />
            </View>
        </View>
    );
};

