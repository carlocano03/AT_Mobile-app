import React from 'react'
import { View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground } from "react-native";

import styles from './footermenu.style';
import { COLORS, SIZES } from '../../../constants';

const home = require('../../../assets/icon-img/home.png');
const calendar = require('../../../assets/icon-img/calendarMenu.png');
const announcement = require('../../../assets/icon-img/announcement.png');
const logout = require('../../../assets/icon-img/power-off.png');

const FooterMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxServices}>
                <View style={styles.betweenSpace}>
                    <TouchableOpacity style={styles.btnSlip}>
                        <Image
                            source={home}
                            style={{
                                tintColor: COLORS.lightWhite
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={{
                                color: COLORS.lightWhite,
                                fontWeight: 500,
                            }}
                        >Home</Text>
                    </View>
                </View>

                <View style={styles.betweenSpace}>
                    <TouchableOpacity style={styles.btnSlip}>
                        <Image
                            source={calendar}
                            style={{
                                tintColor: COLORS.lightWhite,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={{
                                color: COLORS.lightWhite,
                                fontWeight: 500,
                            }}
                        >Attendance</Text>
                    </View>
                </View>

                <View style={styles.betweenSpace}>
                    <TouchableOpacity style={styles.btnSlip}>
                        <Image
                            source={announcement}
                            style={{
                                tintColor: COLORS.lightWhite,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={{
                                color: COLORS.lightWhite,
                                fontWeight: 500,
                            }}
                        >Announcements</Text>
                    </View>
                </View>

                <View style={styles.betweenSpace}>
                    <TouchableOpacity style={styles.btnSlip}>
                        <Image
                            source={logout}
                            style={{
                                tintColor: COLORS.lightWhite,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={{
                                color: COLORS.lightWhite,
                                fontWeight: 500,
                            }}
                        >Logout</Text>
                    </View>
                </View>

            </View>
        </View>


    )
}

export default FooterMenu