import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { heightPixel, normalise, pixelSizeHorizontal, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';
import { AppText } from './AppText';

export default function AddNewCard() {
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.content}>
        <MaterialIcons name="add" size={normalise(30)} color={palette['grey']} />
        <AppText fontFamily='regular' color='grey' style={styles.text}>Add new card</AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: widthPixel(102),
    height: heightPixel(147),
    borderStyle: 'dashed',
    borderWidth: normalise(1),
    borderColor: palette['grey'],
    borderRadius: normalise(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: pixelSizeHorizontal(14.8),
    paddingHorizontal: pixelSizeHorizontal(2),
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: palette['grey'],
    textAlign: "center",
  },
});
