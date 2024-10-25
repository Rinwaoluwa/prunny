import { AppText } from "@/components/AppText";
import { Button } from "@/components/buttons/Button";
import { FLEX } from "@/config/constants";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Profile() {
    return (
        <View style={[FLEX, {padding: 20}]}>
            <View style={[FLEX, { justifyContent: "center", alignItems: "center" }]}>
                <AppText fontSize={15} fontFamily="bold" color="primary--1">Profile</AppText>
            </View>
            <Button title="Logout" backgroundColor="primary--4" onPress={() => {}} />
        </View>
    )
}