import { palette } from '@/config/palette';
import { Control, Controller } from 'react-hook-form';
import React, { useState } from 'react';
import {
    View,
    TextInputProps as RNTextInputProps,
    StyleSheet,
    TextStyle,
    ViewStyle,
    TextInput,
    Pressable,
} from 'react-native';
import { AppText } from './AppText';
import { fontPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { IconName } from '@/assets/svgs/types';
import Icon from '@/assets/svgs/icons';

interface AppTextInputProps extends Omit<RNTextInputProps, 'onBlur' | 'onFocus'> {
    label: string;
    name: string;
    error?: string;
    placeholder?: string;
    left?: IconName;
    right?: IconName;
    control: Control<any, any>;
    editable?: boolean;
    onPress?: () => void;
    onPressLeftIcon?: () => void;
    onPressRigthtIcon?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    style?: TextStyle;
    containerStyle?: ViewStyle;
}

export const AppTextInput = ({
    error,
    onBlur: pureOnBlur,
    onFocus,
    ...props
}: AppTextInputProps) => {

    const [focused, setFocused] = useState(false); // To track if TextInput is focused

    return (
        <View style={[styles.textInputContainer]}>
            <Controller
                control={props.control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[
                        (props.left || props.right) ? 
                            { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } : {},
                        {
                            borderColor: error ? palette['red'] :
                                focused || value ? palette['primary--2'] : palette['grey--4'],
                            borderWidth: normalise(1),
                            borderRadius: normalise(5),
                            paddingHorizontal: pixelSizeHorizontal(24),
                        }]}
                    >
                        {props.left && (
                            <Pressable onPress={props?.onPressLeftIcon}>
                                <Icon name={props.left} />
                            </Pressable>
                        )}
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={() => {
                                onBlur();
                                setFocused(false);
                            }}
                            onFocus={() => {
                                onFocus?.();
                                setFocused(true);
                            }}
                            autoCapitalize="none"
                            editable={props?.editable}
                            style={[
                                props.containerStyle,
                                {
                                    width: "90%",
                                    paddingVertical: pixelSizeVertical(15),
                                    fontFamily: "medium",
                                    fontSize: fontPixel(14),
                                    color: palette['primary--1'],
                                }
                            ]}
                            onPressIn={() => props.onPress?.()}
                            {...props}
                            selectionColor={palette['primary--2']}
                            placeholderTextColor={palette['lightGrey']}
                        />
                        {props.right && (
                            <Pressable onPress={props?.onPressRigthtIcon}>
                                <Icon name={props.right} />
                            </Pressable>
                        )}
                    </View>
                )}
                name={props.name}
            />
            {error ? <AppText fontSize={14} color={'red'} fontFamily="medium">{error}</AppText> : null}
        </View>
    );
};


const styles = StyleSheet.create({
    textInputContainer: {
        marginVertical: pixelSizeVertical(8),
    },
});