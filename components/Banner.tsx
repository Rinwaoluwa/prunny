import { View, ImageBackground, ScrollView, StyleSheet, Platform } from "react-native";
import { pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import { palette } from "@/config/palette";
import { FLEX } from "@/config/constants";
import { Button } from "./buttons/Button";
import { AppText } from "./AppText";


export function Banner() {
    return (
        <>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bannerSection}
                style={styles.scrollViewStyle}
            >
                <View style={styles.banner}>
                    <ImageBackground source={require("../assets/images/banner.jpeg")} style={[FLEX, styles.background]}>
                        <AppText fontFamily="bold" fontSize={18} color="white">SECURE PAYMENT</AppText>
                        <AppText fontFamily="medium" color="white" style={{ marginBottom: pixelSizeVertical(13.4) }}>with Prunny</AppText>
                        <AppText fontFamily="regular" color="white" style={{ marginBottom: pixelSizeVertical(21.82) }}>
                            Open a <AppText fontFamily="regular" color="yellow">Prunny account {"\n"}</AppText>
                            and enjoy all benefits.
                        </AppText>
                        <Button title="Get started" paddingVertical={10} backgroundColor={"yellow"} borderRadius={4} style={styles.button} />
                    </ImageBackground>
                </View>
            </ScrollView>
        </>
    )
}

export const styles = StyleSheet.create({
    bannerSection: {
        paddingLeft: pixelSizeVertical(21),
        gap: pixelSizeVertical(24),
        width: "100%",
        position: "relative",
        marginBottom: pixelSizeVertical(20),
    },
    banner: {
        width: "100%",
    },
    button: {
        width: pixelSizeHorizontal(150),
    },
    background: {
        paddingHorizontal: pixelSizeHorizontal(20),
        paddingTop: Platform.OS === "android" ? pixelSizeVertical(40) : pixelSizeVertical(15),
    },
    scrollViewStyle: {
        backgroundColor: palette['white'],
    }
})