import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: -50,
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
        backgroundColor: COLORS.lightWhite,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // This is for Android
    },
    boxServices:  {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSlip: {
        alignItems: 'center',
        
        paddingHorizontal: SIZES.small,
        paddingVertical: SIZES.small,
        borderRadius: 5,
    },
    btnPay: {
        backgroundColor:'#eb4d4b',
    },
    btnClass: {
        backgroundColor:'#7ed6df',
    },
    btnEvent: {
        backgroundColor:'#a29bfe',
    },
    btnLeave: {
        backgroundColor:'#fdcb6e',
    },
    betweenSpace: {
        margin: 15,
    }
});

export default styles;