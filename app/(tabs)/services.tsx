import { AppText } from "@/components/AppText";
import { FLEX } from "@/config/constants";
import { View } from "react-native";

export default function Services() {
    return (
        <View style={[FLEX, {justifyContent: "center", alignItems: "center"}]}>
            <AppText fontSize={15} fontFamily="bold" color="primary--1">Services</AppText>
        </View>
    )
}