import { forwardRef, ReactNode } from "react";
import { Text, TextStyle, TextProps } from "react-native";
import { Fonts } from "@/config/fonts";
import { fontPixel } from "@/config/normalise";
import { palette, Palette } from "@/config/palette";

interface AppTextStyle extends TextProps {
    fontSize?: TextStyle['fontSize'];
    fontFamily: Fonts,
    color: Palette;
    children: ReactNode;
}

export const AppText = forwardRef<Text, AppTextStyle>(
    ({ fontSize = 14, fontFamily, color, style, children, ...props }, ref) => {
      return (
        <Text
          ref={ref} // Attach ref here
          style={[
            {
              fontSize: fontPixel(fontSize as number),
              fontFamily: fontFamily,
              color: color ? palette[color] : palette['black'],
            },
            style,
          ]}
          {...props}
        >
          {children}
        </Text>
      );
    }
  );