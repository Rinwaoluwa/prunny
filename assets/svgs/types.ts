import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import security from "./icons/security.svg";


export const ICONS = {
    security,
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    stroke?: string;
    iconOpacity?: number;
    strokeWidth?: number;
    focused?: boolean;
}
  
export type Props = IconProps;