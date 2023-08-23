import React from 'react'
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from './welcome.style';
import { COLORS, SIZES } from '../../../constants';

const payslip = require('../../../assets/icon-img/payslip.png');
const classList = require('../../../assets/icon-img/presentation.png');
const event = require('../../../assets/icon-img/calendar.png');
const leave = require('../../../assets/icon-img/leave.png');

const Welcome = () => {
    return (
        <View
            style={{
                paddingHorizontal: 10,
            }}>
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: SIZES.medium,
                        fontWeight: 'bold',
                        color: '#0984e3'
                    }}
                >Services</Text>
                <View style={styles.boxServices}>
                    <View style={styles.betweenSpace}>
                        <TouchableOpacity style={[styles.btnSlip, styles.btnPay]}>
                            <Image
                                source={payslip}
                                style={{
                                    tintColor: COLORS.lightWhite
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    color: '#636e72',
                                    fontWeight: 500,
                                }}
                            >Payslip</Text>
                        </View>
                    </View>

                    <View style={styles.betweenSpace}>
                        <TouchableOpacity style={[styles.btnSlip, styles.btnClass]}>
                            <Image
                                source={classList}
                                style={{
                                    tintColor: COLORS.lightWhite
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    color: '#636e72',
                                    fontWeight: 500,
                                }}
                            >Classes</Text>
                        </View>
                    </View>

                    <View style={styles.betweenSpace}>
                        <TouchableOpacity style={[styles.btnSlip, styles.btnEvent]}>
                            <Image
                                source={event}
                                style={{
                                    tintColor: COLORS.lightWhite
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    color: '#636e72',
                                    fontWeight: 500,
                                }}
                            >Event</Text>
                        </View>
                    </View>

                    <View style={styles.betweenSpace}>
                        <TouchableOpacity style={[styles.btnSlip, styles.btnLeave]}>
                            <Image
                                source={leave}
                                style={{
                                    tintColor: COLORS.lightWhite
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    color: '#636e72',
                                    fontWeight: 500,
                                }}
                            >Leave</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Welcome