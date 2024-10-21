import { normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface TabIndicatorProps {
  totalTabs: number;
  activeTab: number;
}

const TabIndicator: React.FC<TabIndicatorProps> = ({ totalTabs, activeTab }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={[styles.dot, { left: `${(100 / totalTabs) * activeTab}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: pixelSizeVertical(4),
    width: pixelSizeVertical(35.64),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: normalise(2),
    marginTop: pixelSizeVertical(10),
  },
  bar: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: normalise(2),
  },
  dot: {
    position: 'absolute',
    height: pixelSizeVertical(8),
    width: pixelSizeHorizontal(8),
    borderRadius: normalise(4),
    backgroundColor: palette['white'],
    top: normalise(-2),
    marginLeft: pixelSizeHorizontal(-4),
  },
});

export default TabIndicator;