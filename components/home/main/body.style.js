import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    divider: {
        height: 3,
        backgroundColor: COLORS.lightWhite,
        marginBottom: 5,
        borderRadius: SIZES.xSmall
    }

});

export default styles;