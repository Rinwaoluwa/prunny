import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '@/config/palette';
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { AppText } from './AppText';
import Icon from '@/assets/svgs/icons';

interface AddNewWalletProps {
  onPress: () => void;
}

const AddNewWallet: React.FC<AddNewWalletProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Icon name="add-new-wallet" size={60} />
      <AppText fontFamily='bold' color='black'> Add New Wallet</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette['white'],
        borderRadius: normalise(12),
        padding: pixelSizeVertical(20),
        height: pixelSizeVertical(157),
        width: pixelSizeVertical(313),
        marginTop: pixelSizeHorizontal(35),
        justifyContent: "center",
        alignItems: "center",
    },
  iconContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  plusIcon: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#6A0DAD',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddNewWallet;