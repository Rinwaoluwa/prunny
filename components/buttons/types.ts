import { Palette } from '@/config/palette';
import React, { ReactNode } from 'react';
import {StyleProp, ViewStyle} from 'react-native';


export interface ButtonProps {
  title: string | React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textProps?: any;
  backgroundColor?: Palette;
  color?: Palette;
  alignSelf?: "center" | "flex-end" |  "baseline" | "auto" | "flex-start" | "stretch";
  marginTop?: string;
  left?: ReactNode;
  right?: ReactNode;
  borderRadius?: number;
  padding?:number;
  paddingHorizontal?:number;
  paddingVertical?:number;
}