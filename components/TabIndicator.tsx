// TabIndicator.js

import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '@/config/normalise';
import { palette } from '@/config/palette';
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

interface Props {
  activeTab: number;
  tabCount: number;
}

export function TabIndicator ({ activeTab, tabCount }: Props) {
  const indicators = Array.from({ length: tabCount });

  const animations = useRef(
    indicators.map(() => ({
      width: new Animated.Value(20),
      color: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    animations.forEach((animation, index) => {
      Animated.parallel([
        Animated.timing(animation.width, {
          toValue: index === activeTab ? 50 : 20,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(animation.color, {
          toValue: index === activeTab ? 1 : 0,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    });
  }, [activeTab]);

  return (
    <View style={styles.indicatorContainer}>
      {indicators.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.indicator,
            {
              width: index === activeTab ? animations[index].width : widthPixel(10),
              backgroundColor: animations[index].color.interpolate({
                inputRange: [0, 1],
                outputRange: ['#9C7BD9', palette['white']],
              }),
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(15),
  },
  indicator: {
    height: heightPixel(10),
    borderRadius: normalise(20),
    marginHorizontal: pixelSizeHorizontal(5),
  },
});

export default TabIndicator;
