import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Text
} from "react-native";
import Metrics from "../styling/Metrics";
import Divider from "react-native-divider";

export default class Login extends Component {
  login() {
    return Alert.alert(
      "Error",
      "email or password should not be empty",
      [
        {
          text: "OK",
          onPress: () => {}
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../images/loginLogo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            textContentType="emailAddress"
            style={styles.input}
          />
          <TextInput
            placeholder="password"
            textContentType="password"
            style={styles.input}
          />
        </View>

        <View>
          <TouchableOpacity
            title="Log in"
            onPress={this.login.bind(this)}
            style={styles.loginButton}
          >
            <Image
              source={require("../images/signin.png")}
              style={styles.signinImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <Divider borderColor="#fff" color="#fff" orientation="center">
            OR
          </Divider>
        </View>

        <View style={styles.socialMedia}>
          <TouchableOpacity style={styles.facebookButton}>
            <Image
              source={require("../images/facebook-logo2.png")}
              style={styles.soacilMediaImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require("../images/google-logo2.png")}
              style={styles.soacilMediaImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signupText}>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: "#fff" }}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: Metrics.loginContainerPaddingTop
  },
  logoContainer: {
    width: Metrics.logoContainerW,
    height: Metrics.logoContainerH,
    alignItems: "center",
    justifyContent: "center"
  },

  logo: {
    height: Metrics.logoHeight,
    width: Metrics.logoWidth,
    resizeMode: "contain"
  },

  formContainer: {
    margin: 10,
    padding: 10
  },
  input: {
    width: Metrics.inputBoxW,
    height: Metrics.inputBoxH,
    backgroundColor: "#fff",
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },

  loginButton: {
    backgroundColor: "#009688",
    width: Metrics.loginButtonW,
    height: Metrics.loginButtonH,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },

  signinImage: {
    width: Metrics.signinImageW,
    height: Metrics.signinImageH,
    resizeMode: "contain"
  },

  divider: {
    width: Metrics.dividerSocialMediaW
  },

  socialMedia: {
    width: Metrics.dividerSocialMediaW,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10
  },

  facebookButton: {
    width: Metrics.facebookLogoWH,
    height: Metrics.facebookLogoWH
  },

  googleButton: {
    width: Metrics.googleLogoWH,
    height: Metrics.googleLogoWH
  },

  soacilMediaImage: {
    width: Metrics.socailMediaImageWH,
    height: Metrics.socailMediaImageWH,
    borderRadius: 10
  },

  signupText: {
    width: Metrics.signupText,
    paddingTop: 15
  }
});
