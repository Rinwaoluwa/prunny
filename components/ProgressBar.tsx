import React from 'react';
import { View, StyleSheet } from 'react-native';
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';

interface ProgressBarProps {
  progress: number; // 0 to 1
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: pixelSizeHorizontal(80),
    height: pixelSizeVertical(15),
    backgroundColor: palette['primary--3'],
    borderRadius: normalise(12),
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: palette['primary--1'],
    borderRadius: normalise(12),
  },
});
