import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        // padding: SIZES.xSmall,
        backgroundColor: "#0984e3",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    boxServices:  {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSlip: {
        alignItems: 'center',
        borderRadius: 5,
    },
    betweenSpace: {
        margin: 15
    }
});

export default styles;