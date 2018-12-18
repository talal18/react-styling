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
import Metrics from "./styling/Metrics";
import Divider from "react-native-divider";

export default class App extends Component {
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
          <View />
          <Image
            source={require("./images/loginLogo.png")}
            style={styles.logo}
          />
          <View />
          <View />
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
              <Text style={styles.loginButtonText}>Sign in</Text>
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
                source={require("./images/facebook-logo2.png")}
                style={styles.soacilMediaImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
              <Image
                source={require("./images/google-logo2.png")}
                style={styles.soacilMediaImage}
              />
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#424242",
    padding: 10
  },
  logoContainer: {
    width: Metrics.logoContainerW,
    height: Metrics.logoContainerH,
    alignItems: "center",
    padding: 10
  },

  logo: {
    height: Metrics.logoHeight,
    width: Metrics.logoWidth
  },

  formContainer: {
    margin: 10,
    padding: 10
  },
  input: {
    width: Metrics.inputBoxW,
    backgroundColor: "#fff",
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 16,
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

  loginButtonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold"
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
  }
});
