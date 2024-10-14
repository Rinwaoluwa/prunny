import Icon from "@/assets/svgs/icons";
import { pixelSizeVertical } from "@/config/normalise";
import { Pressable } from "react-native";

export function BackButton({ onPress }: { onPress: () => void; }) {
    return (
        <Pressable style={{ marginBottom: pixelSizeVertical(30) }} onPress={onPress}>
            <Icon name="path" />
        </Pressable>
    )
}