import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: -100,
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
    },
    containerBody: {
        backgroundColor: "#FFF",
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        padding: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#636e72',
    },
    btnLogin: {
        borderRadius: 25,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    searchBtnImage: {
        width: 20,
        height: 20,
        tintColor: COLORS.white,
        marginRight: 5
    },
});

export default styles;