import Icon from "@/assets/svgs/icons";
import { heightPixel, pixelSizeVertical, widthPixel } from "@/config/normalise";
import { Pressable } from "react-native";

export function BackButton({ onPress }: { onPress: () => void; }) {
    return (
        <Pressable style={{ marginBottom: pixelSizeVertical(30), height: heightPixel(42), width: widthPixel(42) }} onPress={onPress}>
            <Icon name="path" />
        </Pressable>
    )
}