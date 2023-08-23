import { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from '../../constants';
import { ScreenHeader, Welcome, Body, FooterMenu } from '../../components';

import styles from "../styles";

const arrow = require('../../assets/icons/chevron-right.png');
const bg = require('../../assets/icon-img/8-01.png');
const spinner = require('../../assets/icon-img/origamisolutions.png');



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

const dashboard = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay with useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#dff9fb' }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeader iconUrl={icons.origamiLogo} dimension="60%" />
          ),
          headerTitle: "Origami Education Apps"
        }}
      />

      {loading ? (
        <SplashScreen />
      ) : (
        <>
          {/* <ScrollView> */}
            <ImageBackground
              source={bg}
              style={{ height: 200 }}
            >
              <View style={{
                flexDirection: 'row',
                padding: SIZES.small,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <View>
                  <Text
                    style={{
                      fontSize: 24,
                      color: COLORS.lightWhite,
                      fontWeight: 'bold'
                    }}>Dashboard</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#1e272e',
                      fontWeight: 500
                    }}
                  >Good Morning, Carlo!</Text>
                </View>
                <Image
                  source={images.profile}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 100,
                    borderColor: '#fff',
                    borderWidth: 3
                  }}
                />
              </View>

              <View
                style={{
                  padding: SIZES.small,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text style={{ fontSize: 10, color: '#1e272e' }}>Total Present</Text>
                  <Text style={{ fontSize: 18, color: '#1e272e' }}>10</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 10, color: '#1e272e' }}>Total Absent</Text>
                  <Text style={{ fontSize: 18, color: '#1e272e' }}>10</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.btnView}
                  >
                    <Image
                      source={arrow}
                      style={styles.btnImg}
                    />
                    <Text style={{ color: '#0984e3' }}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>

            <Welcome />

            <Body />

            <FooterMenu />
          {/* </ScrollView> */}
        </>
      )}
    </SafeAreaView>
  )
}

export default dashboard