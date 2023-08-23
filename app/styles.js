import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
        backgroundColor: "#FFF",
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
    },
    headerText: {
        flexDirection: 'row', // Set to 'row'
        alignItems: 'center', // Align items vertically
        backgroundColor: '#f0f0f0', // Example background color
        padding: 8,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 28,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // This is for Android
        marginTop: 60
    },
    btnView: {
        borderRadius: 5,
        backgroundColor: COLORS.lightWhite,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
    },
    btnImg: {
        width: 20,
        height: 20,
        tintColor: '#0984e3',
        marginRight: 5
    },
});

export default styles;