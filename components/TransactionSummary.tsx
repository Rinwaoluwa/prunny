import React from 'react';
import { View, StyleSheet, Modal, Pressable } from 'react-native';
import { palette } from '@/config/palette';
import { heightPixel, normalise, pixelSizeVertical } from '@/config/normalise';
import { Button } from './buttons/Button';
import { AppText } from './AppText';
import Icon from '@/assets/svgs/icons';
import { FLEX, TRANSACTION_SUMMARY } from '@/config/constants';

interface TransactionSummaryProps {
    isVisible: boolean;
    onClose: () => void;
    onContinue: () => void;
}

export default function TransactionSummary({
    isVisible,
    onClose,
    onContinue,
}: TransactionSummaryProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={[styles.centeredView, FLEX]}>
                <View style={styles.modalView}>
                    <View style={[styles.modalHeader, styles.pad]}>
                        <AppText fontFamily='bold' fontSize={16} color='primary--1'>Transaction Summary</AppText>
                        <Pressable onPress={onClose}>
                            <Icon name='close' size={30} />
                        </Pressable>
                    </View>

                    <View style={[styles.detailRow, styles.pad]}>
                        {TRANSACTION_SUMMARY.accountDetail.map((detail, index) => (
                            <View key={index}>
                                <AppText fontFamily='regular' color='grey'>{detail.label}</AppText>
                                <AppText fontFamily='bold' color='primary--1'>{detail.value}</AppText>
                            </View>
                        ))}
                    </View>


                    <View style={[styles.transactionDetails, styles.pad]}>
                        <View style={styles.detailRow}>
                            {TRANSACTION_SUMMARY.transactionDetails.map((detail, index) => (
                                <View key={index}>
                                    <AppText fontFamily='regular' color='grey'>{detail.label}</AppText>
                                    <AppText fontFamily='bold' color='primary--1'>{detail.value}</AppText>
                                </View>
                            ))}
                        </View>

                        <View style={styles.amountContainer}>
                            <AppText fontFamily='regular' color='grey'>Amount</AppText>
                            <AppText fontFamily='bold' color='primary--4'>{TRANSACTION_SUMMARY.amount}</AppText>
                        </View>
                    </View>

                    <View style={[styles.pad, styles.bottomMargin]}>
                        <AppText fontFamily='regular' color='grey'>Description:</AppText>
                        <AppText fontFamily='regular' color='primary--1'>{TRANSACTION_SUMMARY.description}</AppText>
                    </View>

                    <View style={styles.pad}>
                        <Button title="Continue" backgroundColor='primary--4' onPress={onContinue} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: palette['white'],
        borderRadius: normalise(20),
        width: '90%',
        maxWidth: pixelSizeVertical(400),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: heightPixel(2),
        },
        shadowOpacity: normalise(.25),
        shadowRadius: normalise(4),
        elevation: normalise(5),
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: pixelSizeVertical(10),
    },
    amountContainer: {
        marginTop: pixelSizeVertical(10),
        marginBottom: pixelSizeVertical(10),
    },
    pad: {
        padding: normalise(20),
    },
    bottomMargin: {
        marginBottom: pixelSizeVertical(20)
    },
    transactionDetails: {
        backgroundColor: palette['primary--3'],
    },
});