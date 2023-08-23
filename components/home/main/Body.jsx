import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from './body.style';
import { COLORS, SIZES } from '../../../constants';

const Body = () => {
    return (
        <ScrollView style={{
            paddingHorizontal: 10,
        }}>
            <View style={styles.container}>
                <LinearGradient
                    colors={["#00cec9", "#0984e3"]}
                    start={[0.1, 0.1]}
                    style={{
                        width: 200,
                        padding: SIZES.xSmall,
                        borderRadius: 5,
                        height: 85
                    }}
                >
                    <Text style={{ fontWeight:500, color:'#2d3436' }}>Available Paid Leave</Text>
                    <View style={styles.divider} />
                    <Text 
                        style={{
                            fontSize: 12,
                            color: COLORS.lightWhite
                        }}
                    >Sick Leave: Not Entitled</Text>

                    <Text
                        style={{
                            fontSize: 12,
                            color: COLORS.lightWhite
                        }}
                    >Vacation Leave: Not Entitled</Text>
                </LinearGradient>

                <LinearGradient
                    colors={["#6c5ce7", "#a29bfe"]}
                    start={[0.1, 0.1]}
                    style={{
                        width: 165,
                        padding: SIZES.xSmall,
                        borderRadius: 5,
                        height: 85
                    }}
                >
                    <Text style={{ fontWeight:500, color:COLORS.lightWhite }}>Total Income</Text>
                    <View style={styles.divider} />
                    <Text
                        style={{
                            fontSize: 20,
                            color: COLORS.lightWhite
                        }}
                    >₱ 100,000.00</Text>
                </LinearGradient>
            </View>
        </ScrollView>
    )
}

export default Body