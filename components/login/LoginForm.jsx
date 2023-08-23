import { useRouter } from "expo-router";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";
import styles from "./loginform.style";

const iconImage = require('../../assets/icon-img/user.png')
const password = require('../../assets/icon-img/password.png')
const login = require('../../assets/icon-img/login.png')

const LoginForm = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/main');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <Text
          style={{
            fontWeight: 500,
            color: '#0984e3',
            marginBottom: 8,
          }}
        >Email/Username</Text>
        <View style={styles.inputContainer}>
          <Image
            source={iconImage}
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email/Username"
            placeholderTextColor="#999"
          />
        </View>

        <Text
          style={{
            fontWeight: 500,
            color: '#0984e3',
            marginBottom: 8,
            marginTop: 10
          }}
        >Password</Text>
        <View style={styles.inputContainer}>
          <Image
            source={password}
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 20, marginBottom: 15 }}>
          <TouchableOpacity style={styles.btnLogin} onPress={handlePress}>
            <Image 
              source={login}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.lightWhite
              }}
            >LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginForm