export const fonts = {
    family: {
        "Roboto-Bold": require('../assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Light": require('../assets/fonts/Roboto-Light.ttf'),
        "Roboto-Medium": require('../assets/fonts/Roboto-Medium.ttf'),
        "Robot-Regular": require('../assets/fonts/Roboto-Regular.ttf'),
    }
}

export type Fonts = keyof typeof fonts.family;