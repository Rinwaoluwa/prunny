import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from './types';
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';
import { AppText } from '../AppText';

export const Button = ({
  title,
  disabled,
  loading,
  onPress,
  alignSelf,
  style,
  textProps,
  backgroundColor = 'primary--2',
  color = 'white',
  left,
  right,
  borderRadius = normalise(80),
  padding= normalise(16),
  paddingHorizontal=pixelSizeHorizontal(24),
  paddingVertical= pixelSizeVertical(16),
  ...props
}: ButtonProps) => {

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading}>
      <View
        style={[
          style,
          !!backgroundColor ? {backgroundColor: palette[backgroundColor]} : {},
          {
            backgroundColor: palette[backgroundColor],
            padding: normalise(padding),
            marginVertical: pixelSizeVertical(8),
            opacity: disabled ? 0.6 : 1,
            borderRadius: normalise(borderRadius),
            alignItems: "center",
            alignSelf,
            paddingHorizontal: alignSelf ? pixelSizeHorizontal(paddingHorizontal) : 0,
            paddingVertical: alignSelf ? pixelSizeVertical(8) : pixelSizeVertical(paddingVertical),
          }
        ]}
        {...props}>
        {loading ? (
          <ActivityIndicator color={palette[color]} />
        ) : (
          <View style={left || right ? {flexDirection: "row", gap: 10} : {}}>
            {left}
            <AppText
              color={color}
              style={[!!color ? {color: palette?.[color]} : {}]}
              {...textProps}
            >
              {title}
            </AppText>
            {right}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};