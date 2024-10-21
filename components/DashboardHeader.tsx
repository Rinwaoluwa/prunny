import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "@/config/normalise";
import Icon from '@/assets/svgs/icons';
import { AppText } from '@/components/AppText';


export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require("../assets/images/profile-photo.png")} style={styles.avatar} />
                <View>
                    <AppText fontFamily='regular' color='white'>Welcome back,</AppText>
                    <AppText fontFamily='bold' fontSize={18} color='white'>Somto Promise</AppText>
                </View>
            </View>
            <Pressable>
                <Icon name="notification-bell" size={normalise(37)} />
            </Pressable>
        </View>
    )
}


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalise(15),
    },
    avatar: {
        height: pixelSizeVertical(37),
        width: pixelSizeHorizontal(37),
        borderRadius: normalise(7),
    }
})
