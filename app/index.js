import { useState, useEffect } from "react";
import { View, SafeAreaView, Dimensions, Image, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import styles from "./styles";
import { COLORS, SIZES, SHADOWS } from '../constants';

const imgHeader = require('../assets/icon-img/Computer_login-amico.png');
const logo = require('../assets/icon-img/origamisolutions.png');
const spinner = require('../assets/icon-img/origamisolutions.png');
const background = require('../assets/icon-img/bg.png');

//Components
import LoginForm from "../components/login/LoginForm";

const SplashScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
            source={spinner}
            style={{
                height: 100,
                width: 100
            }}
        />
        <Text style={{ fontSize: 20, fontWeight: 500, color: '#2d3436', marginTop: 10 }}>Loading...</Text>
    </View>
);

const Login = () => {
    const { height, width } = Dimensions.get('window');
    const [loading, setLoading] = useState(true);

    // Simulate loading delay with useEffect
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay time as needed
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#dff9fb',
            }}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            {loading ? (
                <SplashScreen />
            ) : (
                <>
                    <View
                        style={{
                            backgroundColor: '#6c5ce7',
                            alignItems: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}
                    >
                        <View style={styles.headerText} >
                            <Image
                                source={logo}
                                style={{
                                    height: 40,
                                    width: 40,
                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: 8,
                                    fontSize: SIZES.medium,
                                    fontWeight: 600,
                                }}>
                                ORIGAMI EDUCATION APPS</Text>
                        </View>
                        <Image
                            source={imgHeader}
                            style={{
                                height: 200,
                                width: 200,
                                marginBottom: 100
                            }}
                        />
                    </View>

                    <LoginForm />

                    <View>
                        <Image
                            source={background}
                            style={{
                                height: 400,
                                width: 400,
                                marginTop: -50
                            }}
                        />
                        <View
                            style={{
                                backgroundColor: '#6c5ce7',
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                padding: 15,
                                marginTop: 170,
                                height: 50,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0
                            }}
                        >
                            <Text
                                style={{color: COLORS.lightWhite, textAlign: 'center', fontWeight: 500 }}
                            >Welcome To Origami Education Apps</Text>
                        </View>
                        
                    </View>


                </>
            )}
        </SafeAreaView>
    )
}

export default Login